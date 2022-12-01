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
  const {id, name, isAdmin} = req.session?.user
  const teaId = req.params.id
  const tea = await Tea.findAll({ where: { id: teaId }, include:[ { model:User}], through:{attributes:{include:[`id`]}}, raw: true })
  const comments = await Comment.findAll({attributes:{include:[`id`]}, raw:true})
  console.log(comments)
  console.log(tea)
  tea.sort((a, b)=>b["Users.Comment.updatedAt"].getTime() - a["Users.Comment.updatedAt"].getTime())
render(ShowEntry, { tea, id, name, isAdmin }, res)
})
route.post('/:id', async (req, res) => {
  // console.log(res.locals.username)
  const data = req.session?.user
  const {id, name, isAdmin} = req.session?.user
  const teaId =  req.params.id
  const { text} =  req.body
  const newEntry = await Comment.create({user_id:id, tea_id:teaId, text})
  console.log(newEntry)
  console.log(teaId,text )
  //const comment = await Comment.create()
  res.json( data );
})




module.exports = route;
