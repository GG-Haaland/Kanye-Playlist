const db = require('../db')
const Album  = require('../models/album')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const albums = [
    {
        name:'',
        description:'',
        image:'',
        label:'',
        released:'',
        songs: ''
    },
   
  ]

  await Album.insertMany(albums)
  console.log('Created albums!')
}
const run = async () => {
  await main()
  db.close()
}

run()