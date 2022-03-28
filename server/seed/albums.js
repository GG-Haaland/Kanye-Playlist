const db = require('../db')
const Album  = require('../models/album')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const albums = [
    {
        name:'The College Dropout',
        description:`The debut studio album by American rapper and producer Kanye West. It was released on February 10, 2004, by Roc-A-Fella Records and Def Jam Recordings. In the years leading up to release, West had received praise for his production work for rappers such as Jay-Z and Talib Kweli, but faced difficulty being accepted as an artist in his own right by figures in the music industry. Intent on pursuing a solo career, he signed a record deal with Roc-A-Fella and recorded the album over a period of four years, beginning in 1999. A widespread critical success, The College Dropout was praised for West's production, humorous and emotional raps, and the music's balance of self-examination and mainstream sensibilities. The album earned the rapper several accolades, including nominations for Album of the Year and Best Rap Album at the 2005 Grammy Awards, winning for the latter. It has since been named by numerous publications as one of the greatest albums of all time, including Rolling Stone and NME, who ranked it at 74 and 273 respectively on their 500 Greatest Albums of All Time lists, and is credited for popularizing the chipmunk soul and conscious rap subgenres in the 2000s.`,
        image:'https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/Kanyewest_collegedropout.jpg/220px-Kanyewest_collegedropout.jpg',
        released:'February 10, 2004',
        length: '76:13',
        platinum:'4x'
    },
    {
        name:'Late Registration',
        description:`he second studio album by American rapper and producer Kanye West. It was released on August 30, 2005, through Def Jam Recordings and Roc-A-Fella Records. West recorded the album over the course of a year during sessions held at studios in Hollywood and New York City, in collaboration with Jon Brion. The recording sessions also featured guest contributions from Adam Levine, Jamie Foxx, Common, Brandy, Jay-Z, and Nas, among others. Matching The College Dropout's commercial success, Late Registration debuted at number one on the US Billboard 200 and sold 860,000 copies in the first week, while reaching the top 10 in nine other countries, such as Ireland and the United Kingdom. It eventually reached more than 3,000,000 copies sold in the US and received a quadruple platinum certification from the Recording Industry Association of America (RIAA), as well as sales certifications in several other territories.`,
        image:'https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Late_registration_cd_cover.jpg/220px-Late_registration_cd_cover.jpg',
        released:'August 30, 2005',
        length:'70:25',
        platinum: '4x'
    },
    {
        name:'Graduation',
        description:`The third studio album by American rapper and producer Kanye West, released on September 11, 2007, through Def Jam Recordings and Roc-A-Fella Records. Graduation debuted at number one on the US Billboard 200, selling over 957,000 copies in the first week of sales. It has since sold over 5 million copies in the United States and been certified quintuple platinum by the Recording Industry Association of America (RIAA). Five accompanying singles were released, including the international hits "Stronger", "Good Life" and "Homecoming", with the former of the three topping the US Billboard Hot 100.`,
        image:'https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg',
        released:'September 11, 2007',
        length: '51:23',
        platinum: '5x'
    },
    {
        name:'My Beautiful Dark Twisted Fantasy',
        description:`fifth studio album by American rapper and producer Kanye West. It was released on November 22, 2010, by Def Jam Recordings and Roc-A-Fella Records following a period of public controversy for West. Retreating to a self-imposed exile in Hawaii in 2009, he recorded the album at Honolulu's Avex Studio in a communal environment involving numerous contributing musicians. My Beautiful Dark Twisted Fantasy was an immediate and widespread critical success, and was named the best album of 2010 in many publications' year-end lists, including the annual Pazz & Jop poll of American critics nationwide. The album also won Best Rap Album at the 2012 Grammy Awards but was not nominated for Album of the Year, which was viewed as a "snub" by several media outlets. The album's hit single "All of the Lights" won Best Rap Song and Best Rap/Sung Collaboration. Widely considered West's best album, My Beautiful Dark Twisted Fantasy has ranked in several professionally curated lists as the best album of the 2010s and among the greatest of all time according to NME and Rolling Stone. George Condo's accompanying artwork – illustrating West being straddled by an armless winged female (resembling a mythological figure) – has been ranked among the greatest album covers. `,
        image:'https://upload.wikimedia.org/wikipedia/en/f/f0/My_Beautiful_Dark_Twisted_Fantasy.jpg',
        released:'November 22, 2010',
        length: '68:39',
        platinum: '3x'
    },
    // {
    //     name:'',
    //     description:'',
    //     image:'',
    //     released:'',
    //     length: '',
    //     platinum: '',
    // },
    // {
    //     name:'',
    //     description:'',
    //     image:'',
    //     released:'',
    //     length: ''
    // },
    // {
    //     name:'',
    //     description:'',
    //     image:'',
    //     released:'',
    //     length: ''
    // },
    // {
    //     name:'',
    //     description:'',
    //     image:'',
    //     released:'',
    //     length: ''
    // },
    // {
    //     name:'',
    //     description:'',
    //     image:'',
    //     released:'',
    //     length: ''
    // },
    // {
    //     name:'',
    //     description:'',
    //     image:'',
    //     released:'',
    //     length: ''
    // }
   
  ]

  await Album.insertMany(albums)
  console.log('Created albums!')
}
const run = async () => {
  await main()
  db.close()
}

run()