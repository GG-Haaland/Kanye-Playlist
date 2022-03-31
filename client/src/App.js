
import './App.css';
import { useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import AlbumList from './components/AlbumList'
import PlaylistForm from './components/Playlist'
import AlbumDeets from './components/AlbumDeets'
import Search from './components/Search'
// import albumArray from './dummyAlbums'
import axios from 'axios'
import Song from './components/Song'
import SongDeets from './components/SongDeets'
import About from './components/About'

function App() {
  const [albums, setAlbum] = useState([])
  const [songs, setSongs] = useState([])
  const [newAlbum, setNewAlbum] = useState({
    name:'',
    image:''
   
})
 
 

///////////// ALBUM API CALLS //////////////////////
  const getAlbums = async() => {
    const albumList = 
    await axios.get('http://localhost:4000/api/albums')
    console.log(albumList.data.albums)
    setAlbum(albumList.data.albums)
  }

    //////////// SONG API CALL //////////////////////////////////
  const getSongs = async() => {
    const songsList = await axios.get('http://localhost:4000/api/songs')
    console.log(songsList)
    setSongs(songsList.data.song)
  }  

  //////// CREATE ALBUMS //////////////////////////////////////////////////////
  const addAlbum = (e) => {
    e.preventDefault()
    const currentAlbum = albums
    const createdAlbum = {
      ...newAlbum,
      id: parseInt(albums.length + 1),
      name: parseInt(newAlbum.name)
    }
    currentAlbum.push(createdAlbum)
    setAlbum(currentAlbum)
    setNewAlbum({ name:'', image:'',
    
  })
  }

  const handleChange = (e) => {
    setNewAlbum({ ...newAlbum, [e.target.name]: e.target.value })
  }

  useEffect (() => {
    getAlbums()
    getSongs()
    // addAlbum()
  
  },[])


  return (
    <div className="App-header">
      {/* <h1>PLA-YE   LIST</h1> */}
      <header >
        <Nav />
        {/* <Search /> */}
      </header>
     
      <main>
      <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path="/albums" element={ <AlbumList albums={albums} newAlbum= {newAlbum} />} />
          <Route path="/albums/:id" element={ <AlbumDeets albums={albums} getAlbums={getAlbums} songs={songs} getSongs={getSongs} />} />
          <Route path="/songs" element={ <Song songs={songs}/>} />
          <Route path="/songs/:id" element={ <SongDeets songs={songs} getSongs={getSongs} />} />
          <Route path='/playlists' element={ <PlaylistForm
                            newAlbum= {newAlbum} 
                            handleChange={handleChange} 
                            addAlbum={addAlbum}/>} />
          <Route path='/about' element={ <About /> } />
        </Routes>
        </main>
    </div>
  );
}

export default App;


  // const addPlaylist = (e) => {
  //   e.preventDefault()
  //   const currentPlaylist = 
  //   const createdPark = {
  //     ...newPark,
  //     id: parseInt(parks.length + 1),
  //     price: parseInt(newPark.price)
  //   }
  //   currentParks.push(createdPark)
  //   setPark(currentParks)
  //   setNewPark({ id: '', description: '', location: '', address: '', url: '', img: '' })
  // }


   

    // const getAlbums = async() => {
    //   const albumList = await fetch('https://kany-api.herokuapp.com/albums') /*axios.get('https://jurassic-master.herokuapp.com/api/dinos')*/
    //   setAlbums(albumList.id)
    //   console.log(albumList)
    // }
    // useEffect(() =>{
    //   getAlbums()
    // },[])


     // const [createdAlbum, setCreatedAlbum]= useState({
  //       name:'',
  //       description:``,
  //       image:'',
  //       image2: '',
  //       released:'',
  //       length: '',
  //       platinum:''
  // })
  // const [playlists, setPlaylist] = useState([])

    // const getPlaylist = async() => {
  //   const playlistsList = await axios.get('http://localhost:3023/api/playlists')
  //   console.log(playlistsList)
  //   setNewPlaylists(playlistsList.data)
  // }  

    // const createAlbum = async() => {
  //   const albumList = 
  //   await axios.post('http://localhost:4000/api/albums')
  //   console.log(albumList.data.albums)
  //   setCreatedAlbum(albumList.data.albums)
  // }
