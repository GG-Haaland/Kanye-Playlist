const mongoose = require('mongoose')
const SongSchema = require('./song')
const AlbumSchema = require('./album')

const Song = mongoose.model('song', SongSchema)
const Album = mongoose.model('album', AlbumSchema)

module.exports = {
  Song,
  Album
}