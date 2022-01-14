const router = require('express').Router()
const { Reaction, Thought, User } = require('../models')

//POST ONE Reaction 
router.post('/reactions', async function (req, res) {
  const thought = await Thought.create(req.body)
  await User.findByIdAndUpdate(req.body.user, {
    $push: { reactions: reaction._id }
  })
  res.json(thought)
})

//DELETE one Reaction by id
router.delete('/reactions/:id', async function (req, res) {
  await Thought.findByIdAndDelete(req.params.id)
  res.sendStatus(200)
})

module.exports = router