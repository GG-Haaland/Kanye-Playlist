const mongoose = require('mongoose');
const Schema  = mongoose.Schema

const Song = new Schema(
  {
    name: { type: String, required: true },
    length: { type: String, required: true },
    features: { type: String, required: true },
    album_id: { type: Schema.Types.ObjectId, ref: 'album_id' }
  },
  { timestamps: true }
)

module.exports = mongoose.model('song', Song)