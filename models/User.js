const { Schema, model} = require ('mongoose')

const User = new Schema({
  username: {
    type: String,
    require: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: "Please enter a valid email"
    },
    required: [true, "Email required"]
  },
  thought: [{
    type: Shcema.Types.ObjectId,
    ref: 'thought',
  }],
  friend: [{
    tyep: Schema.Types.ObjectId,
    ref 'friend'
  }]

  })

module.exports = model('user', User)