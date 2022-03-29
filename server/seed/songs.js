const db = require('../db')
const Album = require('../models/album')
const Song = require('../models/song')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const dropout = await Album.find({ name: 'The College Dropout' })
  const lateRegistration = await Album.find({ name: 'Late Registration' })
  const graduation = await Album.find({ name: 'Graduation' })
  const myDarkFantasy = await Album.find({ name: 'My Beautiful Dark Twisted Fantasy' })
  const yeezus = await Album.find({ name: 'Yeezus' })
  const lifeOfPablo = await Album.find({ name: 'The Life of Pablo' })

  const songs = [
        /// COLLEGE DROPOUT //////////////////////////////////////////////////////////////////
          {
            name: "Intro (Skit)",
            length: '0:19',
            features: 'none',
            album_id: dropout[0]._id
          },
          {
            name: "We Don't Care" ,
            length: '3:59',
            features: 'none',
            album_id: dropout[0]._id
          },
          {
            name: "Graduation Day",
            length: '1:22',
            features: 'none',
            album_id: dropout[0]._id
          },
          {
            name: `All Falls Down`,
            length: '03:43',
            features: 'featuring Syleena Johnson',
            album_id: dropout[0]._id
          },
          {
            name: "I'll Fly Away",
            length: '1:09',
            features: 'na',
            album_id: dropout[0]._id
          },
          {
            name: "Spaceship",
            length: '5:24',
            features: 'featuring GLC and Consequence',
            album_id: dropout[0]._id
          },
          {
            name: 'Jesus Walks',
            length: '03:13',
            features: 'none',
            album_id: dropout[0]._id
          },
          {
            name: "Never Let Me Down",
            length: '5:24',
            features: 'featuring Jay-Z and J. Ivy',
            album_id: dropout[0]._id
          },
          {
            name: "Get Em High",
            length: '4:49',
            features: 'featuring Talib Kweli and Common',
            album_id: dropout[0]._id
          },
          {
            name: "Workout Plan (Skit)",
            length: '0:46',
            features: 'none',
            album_id: dropout[0]._id
          },
          {
            name: "The New Workout Plan",
            length: '5:22',
            features: 'none',
            album_id: dropout[0]._id
          },
          {
            name: 'Slow Jamz',
            length: '05:16',
            features: 'featuring Twista, Jamie Foxx',
            album_id: dropout[0]._id
          },
          {
            name:	"Breathe in Breathe Out",
            length: '4:06',
            features: 'featuring Ludacris',
            album_id: dropout[0]._id
          },
          {
            name: "School Spirit (Skit 1)",
            length: '1:18',
            features: 'none',
            album_id: dropout[0]._id
          },
          {
            name: "School Spirit",
            length: '3:02',
            features: 'none',
            album_id: dropout[0]._id
          },
          {
            name: "School Spirit (Skit 2)",
            length: '0:43',
            features: 'none',
            album_id: dropout[0]._id
          },
          {
            name: "Lil Jimmy (Skit)",
            length: '0:53',
            features: 'none',
            album_id: dropout[0]._id
          },
          {
            name: "Two Words",
            length: '4:26',
            features: 'featuring Mos Def, Freeway, The Boys Choir of Harlem',
            album_id: dropout[0]._id
          },
          {
            name: 'Through the Wire',
            length: '03:41',
            features: 'none',
            album_id: dropout[0]._id
          },
          {
            name: "Family Business",
            length: '4:38',
            features: 'none',
            album_id: dropout[0]._id
          },
          {
            name: "Last Call",
            length: '12:40',
            features: 'none',
            album_id: dropout[0]._id
          },
     //////. LATE REGISTRATION  //////////////////////////////////////////////////////////////////            
    {
    name:	"Wake Up Mr. West",
    length: '0:41',
    features: 'none',
    album_id: lateRegistration[0]._id
  },  
  {
    name: `Heard 'Em Say`,
    length: '03:23',
    features: 'featuring Adam Levine',
    album_id: lateRegistration[0]._id
  }, 
  {
    name: 'Touch the Sky',
    length: '03:57',
    features: 'featuring Lupe Fiasco',
    album_id: lateRegistration[0]._id
  },
  {
    name: "Gold Digger",
    length: '3:28',
    features: 'featuring Jamie Foxx',
    album_id: lateRegistration[0]._id
  },   
  {
    name: "Skit No. 1",
    length: '0:33',
    features: 'none',
    album_id: lateRegistration[0]._id
  }, 
  {
    name: 'Drive Slow',
    length: '04:32',
    features: 'featuring Paul Wall and GLC',
    album_id: lateRegistration[0]._id
  },  
  {
    name: "My Way Home",
    length: '1:43',
    features: 'performed by Common',
    album_id: lateRegistration[0]._id
  },   
  {
    name: "Crack Music",
    length: '4:31',
    features: 'featuring The Game',
    album_id: lateRegistration[0]._id
  },   
  {
    name: "Roses",
    length: '4:05',
    features: 'none',
    album_id: lateRegistration[0]._id
  },   
  {
    name:	"Bring Me Down",
    length: '3:18',
    features: 'featuring Brandy',
    album_id: lateRegistration[0]._id
  },   
  {
    name:	"Addiction",
    length: '4:27',
    features: 'none',
    album_id: lateRegistration[0]._id
  },   
  {
    name: "Skit No. 2",
    length: '0:31',
    features: 'none',
    album_id: lateRegistration[0]._id
  },   
  {
    name: "Diamonds from Sierra Leone (Remix)" ,
    length: '3:53',
    features: 'featuring Jay-Z',
    album_id: lateRegistration[0]._id
  },   
  {
    name: "We Major",
    length: '7:28',
    features: 'featuring Nas and Really Doe',
    album_id: lateRegistration[0]._id
  },   
  {
    name: "Skit No. 3",
    length: '0:24',
    features: 'none',
    album_id: lateRegistration[0]._id
  },   
  {
    name: "Hey Mama",
    length: '5:05',
    features: 'none',
    album_id: lateRegistration[0]._id
  },   
  {
    name: "Celebration",
    length: '3:18',
    features: 'none',
    album_id: lateRegistration[0]._id
  },   
  {
    name: "Skit No. 4",
    length: '1:18',
    features: 'none',
    album_id: lateRegistration[0]._id
  },   
  {
    name: "Gone",
    length: '5:33',
    features: `featuring Consequence and Cam'ron`,
    album_id: lateRegistration[0]._id
  },   
  {
    name: "Diamonds from Sierra Leone (bonus track)",
    length: '3:58',
    features: 'none',
    album_id: lateRegistration[0]._id
  }, 
  {
    name: "Late (hidden track)",
    length: '3:50',
    features: 'none',
    album_id: lateRegistration[0]._id
  } ,
   /////////// GRADUATION //////////////////////////////////////////////////////////
              
              {
                name: "Good Morning",
                length: '3:15',
                features: 'none',
                album_id: graduation[0]._id
              },
              {
                name:	"Champion",
                length: '2:47',
                features: 'none',
                album_id: graduation[0]._id
              },
              {
                name: "Stronger",
                length: '5:12',
                features: 'none',
                album_id: graduation[0]._id
              },
              {
                name:	"I Wonder",
                length: '4:03',
                features: 'none',
                album_id: graduation[0]._id
              },
              {
                name: "Good Life",
                length: '3:27',
                features: 'featuring T-Pain',
                album_id: graduation[0]._id
              },
              {
                name: "Can't Tell Me Nothing",
                length: '4:31',
                features: 'none',
                album_id: graduation[0]._id
              },
              {
                name: "Barry Bonds",
                length: '3:24',
                features: 'featuring Lil Wayne',
                album_id: graduation[0]._id
              },
              {
                name: "Drunk and Hot Girls",
                length: '5:13',
                features: 'featuring Mos Def',
                album_id: graduation[0]._id
              },
              {
                name: "Flashing Lights" ,
                length: '3:57',
                features: 'featuring Dwele',
                album_id: graduation[0]._id
              },
              {
                name: "Everything I Am" ,
                length: '3:47',
                features: 'featuring scratches by DJ Premier',
                album_id: graduation[0]._id
              },
              {
                name: "The Glory",
                length: '3:32',
                features: 'none',
                album_id: graduation[0]._id
              },
              {
                name: "Homecoming" ,
                length: '3:23',
                features: 'featuring Chris Martin',
                album_id: graduation[0]._id
              },
              {
                name: "Big Brother",
                length: '4:47',
                features: 'none',
                album_id: graduation[0]._id
              },
    //////////. MBDTF  ////////////////////////////////////////////////////////// 
  {
    name: "Dark Fantasy",
    length: '4:40',
    features: 'none',
    album_id: myDarkFantasy[0]._id
  },
  {
    name:	"Gorgeous",
    length: '5:57',
    features: 'featuring Kid Cudi and Raekwon',
    album_id: myDarkFantasy[0]._id
  },
  {
    name: "Power",
    length: '4:52',
    features: 'none',
    album_id: myDarkFantasy[0]._id
  },
  {
    name: "All of the Lights (Interlude)",
    length: '1:02',
    features: 'none',
    album_id: myDarkFantasy[0]._id
  },
  {
    name: "All of the Lights",
    length: '4:59',
    features: 'featuring Rihanna',
    album_id: myDarkFantasy[0]._id
  },
  {
    name: "Monster",
    length: '6:18',
    features: '(featuring Jay-Z, Rick Ross, Nicki Minaj and Bon Iver',
    album_id: myDarkFantasy[0]._id
  },
  {
    name: "So Appalled",
    length: '6:38',
    features: 'featuring Swizz Beatz, Jay-Z, Pusha T, Cyhi the Prynce and RZA',
    album_id: myDarkFantasy[0]._id
  },
  {
    name: "Devil in a New Dress",
    length: '5:52',
    features: 'featuring Rick Ross',
    album_id: myDarkFantasy[0]._id
  },
  {
    name: "Runaway",
    length: '9:07',
    features: 'featuring Pusha T',
    album_id: myDarkFantasy[0]._id
  },
  {
    name: "Hell of a Life",
    length: '5:27',
    features: 'none',
    album_id: myDarkFantasy[0]._id
  },
  {
    name: "Blame Game",
    length: '7:49',
    features: 'featuring John Legend and Chris Rock',
    album_id: myDarkFantasy[0]._id
  },
  {
    name: "Lost in the World",
    length: '4:16',
    features: 'none',
    album_id: myDarkFantasy[0]._id
  },
  {
    name: "Who Will Survive in America",
    length: '1:38',
    features: 'none',
    album_id: myDarkFantasy[0]._id
  },
/////////////// YEEZUS /////////////////////////////////////////
            {
              name: 'On Sight',
              length: '2:36',
              features: 'none',
              album_id: yeezus[0]._id
            },
            {
              name: 'Black Skinhead',
              length: '3:08',
              features: 'none',
              album_id: yeezus[0]._id
            },
            {
              name: "I Am a God",
              length: '3:51',
              features: 'none',
              album_id: yeezus[0]._id
            },
            {
              name: "New Slaves",
              length: '4:16',
              features: 'featuring Frank Ocean',
              album_id: yeezus[0]._id
            },
            {
              name:	"Hold My Liquor",
              length: '5:26',
              features: 'none',
              album_id: yeezus[0]._id
            },
            {
              name: "I'm in It",
              length: '3:54',
              features: 'none',
              album_id: yeezus[0]._id
            },
            {
              name: "Blood on the Leaves",
              length: '6:00',
              features: 'none',
              album_id: yeezus[0]._id
            },
            {
              name: "Guilt Trip",
              length: '4:03',
              features: 'none',
              album_id: yeezus[0]._id
            },
            {
              name: "Send It Up",
              length: '2:58',
              features: 'none',
              album_id: yeezus[0]._id
            },
            {
              name: "Bound 2",
              length: '3:49',
              features: 'none',
              album_id: yeezus[0]._id
            },
  ///////// THE LIFE OF PABLO //////////////////////////////////
      {
        name: "Ultralight Beam",
        length: '5:20',
        features: 'none',
        album_id: lifeOfPablo[0]._id
      },
      {
        name: "Father Stretch My Hands, Pt. 1",
        length: '2:15',
        features: 'none',
        album_id: lifeOfPablo[0]._id
      },
      {
        name: "Pt. 2",
        length: '2:10',
        features: 'none',
        album_id: lifeOfPablo[0]._id
      },
      {
        name: "Famous",
        length: '3:16',
        features: 'none',
        album_id: lifeOfPablo[0]._id
      },
      {
        name: "Feedback",
        length: '2:27',
        features: 'none',
        album_id: lifeOfPablo[0]._id
      },
      {
        name: "Low Lights",
        length: '2:11',
        features: 'none',
        album_id: lifeOfPablo[0]._id
      },
      {
        name: "Highlights",
        length: '3:19',
        features: 'none',
        album_id: lifeOfPablo[0]._id
      },
      {
        name: "Freestyle 4",
        length: '2:03n',
        features: 'none',
        album_id: lifeOfPablo[0]._id
      },
      {
        name: "I Love Kanye",
        length: '0:44',
        features: 'none',
        album_id: lifeOfPablo[0]._id
      },
      {
        name: "Waves",
        length: '3:01',
        features: 'none',
        album_id: lifeOfPablo[0]._id
      },
      {
        name: 	"FML",
        length: '3:56',
        features: 'none',
        album_id: lifeOfPablo[0]._id
      },
      {
        name: "Real Friends",
        length: '4:11',
        features: 'none',
        album_id: lifeOfPablo[0]._id
      },
      {
        name: "Wolves",
        length: '5:01',
        features: 'none',
        album_id: lifeOfPablo[0]._id
      },
      {
        name: "Frank's Track",
        length: '0:38',
        features: 'none',
        album_id: lifeOfPablo[0]._id
      },
      {
        name: "Siiiiiiiiilver Surffffeeeeer Intermission",
        length: '0:56',
        features: 'none',
        album_id: lifeOfPablo[0]._id
      },
      {
        name: "30 Hours",
        length: '5:23',
        features: 'none',
        album_id: lifeOfPablo[0]._id
      },
      {
        name: "No More Parties in LA",
        length: '6:14',
        features: 'none',
        album_id: lifeOfPablo[0]._id
      },
      {
        name: "Facts (Charlie Heat Version)",
        length: '3:20',
        features: 'none',
        album_id: lifeOfPablo[0]._id
      },
      {
        name: "Fade",
        length: '3:13',
        features: 'none',
        album_id: lifeOfPablo[0]._id
      },
      {
        name: "Saint Pablo",
        length: '6:12',
        features: 'none',
        album_id: lifeOfPablo[0]._id
      }
      
  ]

  await Song.insertMany(songs)
  console.log('Created songs with albums!')
}
const run = async () => {
  await main()
  db.close()
}

run()