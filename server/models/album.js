const mongoose = require('mongoose');
const Schema  = mongoose.Schema

const Album = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    released: { type: String, required: true },
    length: { type: String, required: true }, 
    platinum: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = mongoose.model('album', Album)