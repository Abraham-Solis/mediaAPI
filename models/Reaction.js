const { Schema, model, SchemaTypes } = require('mongoose')

const Reaction = new Schema({
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280
  },
  username: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  thought: {
    type: Schema.Types.ObjectId,
    ref: 'thought',
    required: true
  }
}, { timestamps: true })

module.exports = model('reaction', Reaction)