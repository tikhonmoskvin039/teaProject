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
  const teaList = await Tea.findAll({ raw: true });
  // console.log('......', teaList)
  res.json({ teaList })
})

route.get('/:id', async (req, res) => {
  const { id, name, isAdmin } = req?.session?.user
  const teaId = req.params.id
  const tea = await Tea.findAll({ where: { id: teaId }, include: [{ model: User }], raw: true })
  let comments = await Comment.findAll({ where: { tea_id: teaId, user_id: id }, attributes: { include: [`id`] }, order: [['user_id', 'ASC']], raw: true })
  let commentsUsers = await Tea.findAll({ where: { id: teaId }, include: { model: User, where: { id: id } }, raw: true })
  // if(isAdmin){
  //   comments = await Comment.findAll({ where :{ tea_id: teaId }, attributes: { include: [`id`] }, order:[['user_id', 'ASC']], raw: true })
  //   commentsUsers = await Tea.findAll({ where: { id: teaId}, include: { model: User }, raw: true })
  //   console.log(comments,commentsUsers)
  // }
  // console.log(comments)
  // console.log(commentsUsers)
  commentsUsers.forEach((el, index) => {
    el.commentId = comments[index].id
  })
  // console.log(commentsUsers)
  tea.sort((a, b) => b["Users.Comment.updatedAt"].getTime() - a["Users.Comment.updatedAt"].getTime())
  render(ShowEntry, { tea, id, name, isAdmin, commentsUsers }, res)
})


route.post('/:id', async (req, res) => {
  // console.log(res.locals.username)
  const data = req.session?.user
  const { id, name, isAdmin } = req.session?.user
  const teaId = req.params.id
  const { text } = req.body
  let comments = await Comment.findAll({ attributes: { include: [`id`] }, raw: true })
  const commentId = comments[comments.length - 1].id + 1;
  //console.log(comments)
  data.commentId = commentId;
  const newEntry = await Comment.create({ id: commentId, user_id: id, tea_id: teaId, text, })
  //console.log('.........',newEntry)
  // console.log(teaId, text)
  //const comment = await Comment.create()
  res.json(data);
})
route.put('/:id', async (req, res) => {
  const { changeMessage, messageId } = req.body
  const message = await Comment.update( { text: changeMessage }, {where: { id: messageId }});
// console.log(message)
// console.log(changeMessage, messageId)
const data = req.session?.user
res.json( data );
 })
route.delete('/:id', async (req, res) => {
  await Comment.destroy({ where: { id: req.params.id } });
  res.json({ status: 200, text: 'all good' });
})




module.exports = route;
