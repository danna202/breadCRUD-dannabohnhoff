const mogoose = require('mongoose')

const breadSchema = new mongoose.Schema({
  name: {
    type: String
  },
  hasGluten: {
    type: Boolean
  },
  image: {
    type: String
  }
})

module.exports = mongoose.model('Bread', breadSchema)

  