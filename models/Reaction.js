const { Schema, model } = require('mongoose')

const Reaction = new Schema({
  reactionId: {

  },
  reactionBody:{

  },
  username: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
}, { timestamps: true })

module.exports = model('reaction', Reaction)