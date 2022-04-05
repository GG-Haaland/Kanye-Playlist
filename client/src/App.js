
import './App.css';
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import AlbumList from './components/AlbumList'
import PlaylistForm from './components/Playlist'
import AlbumDeets from './components/AlbumDeets'
import axios from 'axios'
import Song from './components/Song'
import SongDeets from './components/SongDeets'
import About from './components/About'


function App() {
  const [albums, setAlbum] = useState([])
  const [songs, setSongs] = useState([])
  const [newAlbum, setNewAlbum] = useState({
    id: '',
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
     
      <header >
        <Nav />
        
      </header>
     
      <main>
      <Routes>
          <Route path='/' element={ <Home albums={albums} /> } />
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


  