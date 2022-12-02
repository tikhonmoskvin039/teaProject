const express = require("express");
const route = express.Router();

const render = require("../lib/render");
const Private = require("../views/Private");
const {isAuth} = require("../middlewares/functs");
const { User, Tea, Comment } = require("../db/models");

route.get('/',isAuth, async (req, res) => {
    const user_id = req?.session?.user?.id
    try {
        const ame = await User.findOne({ where: { id: user_id }, raw: true });
        const commentes = await User.findAll({ where: { id: user_id }, include: [{ model: Tea }], raw: true })
        const comments = await Comment.findAll({
            attributes: { include: ['id'] }
        })
        //console.log("chai-----", comments)
        // console.log("chai-----", commentes)
        const commentsArr = []
        comments.map((el) => {
            el.dataValues.user_id === user_id ?
                commentsArr.push({
                    comment_id: el.dataValues.id,
                    text: el.dataValues.text,
                    teas_id: el.dataValues.tea_id,
                    time: el.dataValues.updatedAt,
                }) : 0
        })
        // console.log("chai-----", commentsArr)

        render(Private, { ame, commentsArr, commentes }, res);
    } catch (error) {
        res.json(error);
        console.log("error", error);
    }
});

route.delete('/del', async (req, res) => {
    const { comment_id } = req.body
    // console.log("coment.......", comment_id)
    try {
        const delResp = await Comment.destroy({ where: { id: comment_id } })
        // console.log("del.resp", delResp)
        res.json({ delResp })
    } catch (error) {
        res.json(error);
        console.log("error", error);
    }
});

route.put("/upd", async (req, res) => {
    try {
        const { comment_id, text } = req.body;
        //console.log({ comment_id, text })
        const updateComment = await Comment.update({ text },
            { where: { id: comment_id } }, { raw: true });
       // console.log(updateComment)
        
        const newComment = await Comment.findOne({ where: { id: comment_id } , raw: true })
        //   res.redirect("/private");
        //console.log(newComment)
        res.json(newComment)

    } catch (err) {
        console.error(err);
    }
});
module.exports = route;
