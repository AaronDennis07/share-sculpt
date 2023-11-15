const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'user must not be empty'],
    max: [20, 'username must not exceed 20 characters']
  },
  password: String,
  email: {
    type: String,
    validate: {
      validator: function (v) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
      },
      message: props => `${props.value} is not a valid email!`
    },
  },
  blogs: {
    type: [mongoose.Schema.ObjectId],
    ref: 'Blog',
  }
})


userSchema.pre('save', async function () {
  if (!this.isModified('password')) return
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(this.password, salt)
  this.password = hash
})

userSchema.methods.comparePassword = async function (candidatePassword) {
  console.log(candidatePassword)
  console.log(this.password)
  const isMatch = await bcrypt.compare(candidatePassword,this.password)
  console.log(isMatch)
  return isMatch
}

module.exports = mongoose.model('User',userSchema)