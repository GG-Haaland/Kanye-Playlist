const mongoose = require('mongoose');
const Schema  = mongoose.Schema

const Album = new Schema(
  {
    name: { type: String, required: false },
    description: { type: String, required: false },
    image: { type: String, required: false },
    released: { type: String, required: false },
    length: { type: String, required: false }, 
    platinum: { type: String, required: false },
  },
  { timestamps: true }
)

module.exports = mongoose.model('album', Album)