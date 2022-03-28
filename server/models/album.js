const { Schema } = require('mongoose')

const Album = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    released: { type: String, required: true },
    length: { type: Number, required: true }, 
    platinum: { type: Number, required: true },
  },
  { timestamps: true }
)

module.exports = Album