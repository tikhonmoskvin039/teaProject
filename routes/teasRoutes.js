const express = require('express');
const route = express.Router();

const render = require('../lib/render');
const ShowEntry = require('../views/ShowEntry');
const { Tea, Comment, User } = require('../db/models')
const Teas = require('../views/Teas');

route.get('/', (req, res) => {
  render(Teas, { title: 'Чай' }, res)
})
route.get('/all', async (req, res) => {
  const teaList = await Tea.findAll({raw:true});
  // console.log('......', teaList)
  res.json({teaList})
})

route.get('/:id', async (req, res) => {
  const teaId = req.params.id
  const tea = await Tea.findAll({ where: { id: teaId }, include:[ { model:User }],order: [[User,{Tea},'updatedAt', 'DESC']], raw: true })
  tea.sort((a, b)=>b["Users.Comment.updatedAt"].getTime() - a["Users.Comment.updatedAt"].getTime())
render(ShowEntry, { tea }, res)
})
route.post('/:id', async (req, res) => {
  const teaId =  req.params.id
  const {userId, text} =  req.body
  const newEntry = await Comment.create({user_id:userId, tea_id:teaId, text})
  console.log(userId,teaId,text )
  //const comment = await Comment.create()
  res.json({ status: 200, text: 'biba' });
})




module.exports = route;
