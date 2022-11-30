const express = require('express');
const route = express.Router();

const render = require('../lib/render');
const Private = require('../views/Private');

const { User, Tea, Comment } = require('../db/models');

route.get('/', async (req, res) => {
    const user_id = req.session.user.id
    console.log('req.session.user', req.session.user)
    // const user_id = req.session.id
    try {
        const ame = await User.findOne({ where: { id: user_id }, raw: true });
        const comments = await User.findAll({ where: { id: user_id }, include: [{ model: Tea }], raw: true })
        console.log('username-----------', ame);
        console.log('comments-----------', comments);
        render(Private, { ame, comments }, res);
    } catch (error) {
        res.json(error);
        console.log("error", error);
    }
});

route.delete('/del', async (req, res) => {
    const { comment_id } = req.body
    console.log(comment_id)
    try {
        const delResp = await Comment.destroy({ where: { id: comment_id } })
        res.json({ delResp })
    } catch (error) {
        res.json(error);
        console.log("error", error);
    }
});

module.exports = route;