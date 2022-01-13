const { Schema, model, SchemaTypes } = require('mongoose')

const Reaction = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    ref:'thought'

  },
  reactionBody:{
    type: String,
    required: true,
    maxlength: 280

  },
  username: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
}, { timestamps: true })

module.exports = model('reaction', Reaction)