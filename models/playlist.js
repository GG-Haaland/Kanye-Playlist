const mongoose = require('mongoose');
const Schema  = mongoose.Schema

const Playlist = new Schema(
  {
    name: { type: String, required: false },
    image: { type: String, required: false },
    songs: { type: String, required: false },
  },
  { timestamps: true }
)

module.exports = mongoose.model('playlist', Playlist)