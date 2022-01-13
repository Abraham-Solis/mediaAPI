const { Schema, model } = require('mongoose')

const Thought = new Schema({
  thoughtText: {
    type: String,
    required: true,
    maxlength: 280

  },
  username: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  reactions: [{
    type: Schema.Types.ObjectId,
    ref:'reaction'
  }]
}, {timestamps: true})

module.exports = model('thought', Thought)