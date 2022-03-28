const db = require('../db')
const { Album, Song } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const dropout = await Album.find({ name: 'The College Dropout' })
  const lateRegistration = await Album.find({ name: 'Late Registration' })
  const graduation = await Album.find({ name: 'Graduation' })
  const myDarkFantasy = await Album.find({ name: 'My Beautiful Dark Twisted Fantasy' })

  const songs = [
    {
      name: `All Falls Down`,
      length: '03:43',
      features: 'none',
      album_id: dropout[0]._id
    },
    {
        name: 'Jesus Walks',
        length: '03:13',
        features: 'none',
        album_id: dropout[0]._id
      },
      {
        name: 'Slow Jamz',
        length: '05:16',
        features: 'Twista, Jamie Foxx',
        album_id: dropout[0]._id
      },
      {
        name: 'Through the Wire',
        length: '03:41',
        features: 'none',
        album_id: dropout[0]._id
      },
      {
        name: `Heard 'Em Say`,
        length: '03:23',
        features: 'Adam Levine',
        album_id: lateRegistration[0]._id
      },
      {
        name: 'Touch the Sky',
        length: '03:57',
        features: 'Lupe Fiasco',
        album_id: lateRegistration[0]._id
      },
      {
        name: 'Drive Slow',
        length: '04:32',
        features: 'GLC',
        album_id: lateRegistration[0]._id
      },
      {
        name: 'Diamonds from Sierra Leone',
        length: '03:58',
        features: 'none',
        album_id: lateRegistration[0]._id
      },
      {
        name: 'Stronger',
        length: '05:12',
        features: 'none',
        album_id: graduation[0]._id
      },
      {
        name: 'Good Life',
        length: '03:27',
        features: 'T-Pain',
        album_id: graduation[0]._id
      },
      {
        name: `Can't Tell Me Nothing`,
        length: '04:32',
        features: 'Young Jeezy',
        album_id: graduation[0]._id
      },
      {
        name: 'Flashing Lights',
        length: '03:58',
        features: 'none',
        album_id: graduation[0]._id
      },
      {
        name: 'Power',
        length: '04:52',
        features: 'none',
        album_id: myDarkFantasy[0]._id
      },
      {
        name: 'All of the Lights ',
        length: '04:59',
        features: 'Rihanna',
        album_id: myDarkFantasy[0]._id
      },
      {
        name: 'Monster',
        length: '06:18',
        features: 'Niki Minaj, Jay-Z',
        album_id: myDarkFantasy[0]._id
      },
      {
        name: 'Devil in a New Dress',
        length: '05:52',
        features: 'Rick Ross',
        album_id: myDarkFantasy[0]._id
      }
  ]

  await Song.insertMany(songs)
  console.log('Created songss with albums!')
}
const run = async () => {
  await main()
  db.close()
}

run()