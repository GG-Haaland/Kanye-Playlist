const db = require('../db')
const Album  = require('../models/album')
// const cors = require('cors');

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const albums = [
    {
        name:'The College Dropout',
        description:`The debut studio album by American rapper and producer Kanye West. It was released on February 10, 2004, by Roc-A-Fella Records and Def Jam Recordings. In the years leading up to release, West had received praise for his production work for rappers such as Jay-Z and Talib Kweli, but faced difficulty being accepted as an artist in his own right by figures in the music industry. Intent on pursuing a solo career, he signed a record deal with Roc-A-Fella and recorded the album over a period of four years, beginning in 1999. A widespread critical success, The College Dropout was praised for West's production, humorous and emotional raps, and the music's balance of self-examination and mainstream sensibilities. The album earned the rapper several accolades, including nominations for Album of the Year and Best Rap Album at the 2005 Grammy Awards, winning for the latter. It has since been named by numerous publications as one of the greatest albums of all time, including Rolling Stone and NME, who ranked it at 74 and 273 respectively on their 500 Greatest Albums of All Time lists, and is credited for popularizing the chipmunk soul and conscious rap subgenres in the 2000s.`,
        image:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/26daef69314457.5b7ccc327774b.gif',
        image2: 'https://i.redd.it/3jozti9c4rf21.jpg',
        released:'February 10, 2004',
        length: '76:13',
        platinum:'4x'
    },
    {
        name:'Late Registration',
        description:`The second studio album by American rapper and producer Kanye West. It was released on August 30, 2005, through Def Jam Recordings and Roc-A-Fella Records. West recorded the album over the course of a year during sessions held at studios in Hollywood and New York City, in collaboration with Jon Brion. The recording sessions also featured guest contributions from Adam Levine, Jamie Foxx, Common, Brandy, Jay-Z, and Nas, among others. Matching The College Dropout's commercial success, Late Registration debuted at number one on the US Billboard 200 and sold 860,000 copies in the first week, while reaching the top 10 in nine other countries, such as Ireland and the United Kingdom. It eventually reached more than 3,000,000 copies sold in the US and received a quadruple platinum certification from the Recording Industry Association of America (RIAA), as well as sales certifications in several other territories.`,
        image:'https://lastfm.freetls.fastly.net/i/u/770x0/810a9a0d690fc9560de12937c90e3087.jpg',
        image2: 'https://images.eil.com/large_image/KANYE_WEST_LATE%2BREGISTRATION-663539b.jpg',
        released:'August 30, 2005',
        length:'70:25',
        platinum: '4x'
    },
    {
        name:'Graduation',
        description:`The third studio album by American rapper and producer Kanye West, released on September 11, 2007, through Def Jam Recordings and Roc-A-Fella Records. Graduation debuted at number one on the US Billboard 200, selling over 957,000 copies in the first week of sales. It has since sold over 5 million copies in the United States and been certified quintuple platinum by the Recording Industry Association of America (RIAA). Five accompanying singles were released, including the international hits "Stronger", "Good Life" and "Homecoming", with the former of the three topping the US Billboard Hot 100.`,
        image:'https://i.pinimg.com/originals/9f/51/cc/9f51cc2ae4004507f43ee93ccacd2ec2.gif',
        image2: 'https://images.rapgenius.com/d68dff5b6ffed4ebfc8549aafe897f56.1000x751x1.png',
        released:'September 11, 2007',
        length: '51:23',
        platinum: '5x'
    },
    {
        name:'My Beautiful Dark Twisted Fantasy',
        description:`The fifth studio album by American rapper and producer Kanye West. It was released on November 22, 2010, by Def Jam Recordings and Roc-A-Fella Records following a period of public controversy for West. Retreating to a self-imposed exile in Hawaii in 2009, he recorded the album at Honolulu's Avex Studio in a communal environment involving numerous contributing musicians. My Beautiful Dark Twisted Fantasy was an immediate and widespread critical success, and was named the best album of 2010 in many publications' year-end lists, including the annual Pazz & Jop poll of American critics nationwide. The album also won Best Rap Album at the 2012 Grammy Awards but was not nominated for Album of the Year, which was viewed as a "snub" by several media outlets. The album's hit single "All of the Lights" won Best Rap Song and Best Rap/Sung Collaboration. Widely considered West's best album, My Beautiful Dark Twisted Fantasy has ranked in several professionally curated lists as the best album of the 2010s and among the greatest of all time according to NME and Rolling Stone. George Condo's accompanying artwork – illustrating West being straddled by an armless winged female (resembling a mythological figure) – has been ranked among the greatest album covers. `,
        image:'https://i.gifer.com/G4c3.gif',
        image2: 'https://i.pinimg.com/564x/cd/1b/64/cd1b6440336d4e6b80370e87314c93e2.jpg',
        released:'November 22, 2010',
        length: '68:39',
        platinum: '3x'
    },
    {
        name:'Yeezus',
        description:`The sixth studio album by American rapper and producer Kanye West. It was released on June 18, 2013, through Def Jam Recordings and Roc-A-Fella Records. West gathered a number of artists and close collaborators for the production, including Mike Dean, Daft Punk, Noah Goldstein, Arca, Hudson Mohawke, and Travis Scott. The album also features guest vocals from Justin Vernon, Chief Keef, Kid Cudi, Assassin, King L, Charlie Wilson, and Frank Ocean. Yeezus received widespread acclaim from critics, many of whom named it among West's best work and commended its brash direction, though public response was divided. The album was nominated for Best Rap Album at the 2014 Grammy Awards. The album debuted at number one on the US Billboard 200, selling 327,000 copies in the first week of release, while also topping the charts in Australia, Canada, Denmark, New Zealand, Russia and the United Kingdom. It has since been certified double platinum by the Recording Industry Association of America (RIAA), and was named by several publications as one of the best albums of the 2010s, including Rolling Stone, who later included it at 269 on its 2020 list of the 500 Greatest Albums of All Time.`,
        image:'https://i.pinimg.com/originals/24/eb/c1/24ebc11431a8327f157812108e735db6.gif',
        image2: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/ab95e29374111.560cd6b6d3564.jpg',
        released:'June 18, 2013',
        length: '40:01',
        platinum: '2x'
    },
    {
      name:'The Life of Pablo',
      description:`The seventh studio album by American rapper and producer Kanye West. It was released on February 14, 2016, through GOOD Music and distributed by Def Jam Recordings. Recording sessions took place from 2013 to 2016, in Italy, Mexico, Canada, and the United States. West and a variety of producers, including co-executive producers Rick Rubin and Noah Goldstein handled production. West enlisted guest vocals for the album from Chance the Rapper, Kirk Franklin, Kid Cudi, Desiigner, Rihanna, The Weeknd, Ty Dolla Sign, Post Malone, Kendrick Lamar, Sia, Vic Mensa, Chris Brown, Young Thug, and Sampha. The Life of Pablo received five nominations at the 2017 Grammy Awards, including Best Rap Album, though the Album of the Year rejection was deemed a snub by numerous publications. Following Tidal's initial disclosure of its streaming data and its release to competing streaming services, the album debuted at number one on the US Billboard 200, becoming the first to reach the summit primarily through streaming, and was ultimately certified double platinum by the Recording Industry Association of America (RIAA). It also debuted at number one in Norway, and in the top ten in Canada, Denmark, Finland, Ireland, the Netherlands, and Sweden.`,
      image: 'https://c.tenor.com/pi0MBF2IgIwAAAAd/pablo-kanye-west.gif',
      image2: 'https://metro.co.uk/wp-content/uploads/2016/02/zdcjsdkjfv.jpg?quality=90&strip=all&zoom=1&resize=480%2C457',
      released:'February 14, 2016',
      length: '66:01',
      platinum: '2x'
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