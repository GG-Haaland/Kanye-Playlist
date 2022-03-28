const { Schema } = require('mongoose')

const Album = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    label: { type: String, required: true },
    released: { type: String, required: true },
    songs: { type: Number, required: true }
  },
  { timestamps: true }
)

module.exports = Album