const db = require('../db')
const Playlist = require('../models/playlist')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const playlist = [
   { 
    name: '',
    image: '',
    songs: '',
   }



]

await Playlist.insertMany(playlist)
console.log('Created playlist!')
}
const run = async () => {
await main()
db.close()
}

run()