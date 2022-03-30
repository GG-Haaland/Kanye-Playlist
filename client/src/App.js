
import './App.css';
import { useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import AlbumList from './components/AlbumList'
import Playlist from './components/Playlist'
import AlbumDeets from './components/AlbumDeets'
import Search from './components/Search'
// import albumArray from './dummyAlbums'
import axios from 'axios'
import Song from './components/Song'
import SongDeets from './components/SongDeets'

function App() {
  const [albums, setAlbum] = useState([])
  const [songs, setSongs] = useState([])
  const [playlists, setPlaylist] = useState([])
  const [newPlaylist, setNewPlaylist] = useState({
    id: '',
    name: '',
    image: '',
    songs: [],
  })


  const getAlbums = async() => {
    const albumList = 
    await axios.get('http://localhost:4000/api/albums')
    console.log(albumList.data.albums)
    setAlbum(albumList.data.albums)
  }

  const getSongs = async() => {
    const songsList = await axios.get('http://localhost:4000/api/songs')
    console.log(songsList)
    setSongs(songsList.data)
  }  

  // const getPlaylist = async() => {
  //   const playlistsList = await axios.get('http://localhost:3023/api/playlists')
  //   console.log(playlistsList)
  //   setNewPlaylists(playlistsList.data)
  // }  

  
  const addPlaylist = (e) => {
    e.preventDefault()
    const currentPlaylist = playlists
    const createdPlaylist = {
      ...newPlaylist,
      id: parseInt(playlists.length + 1),
      name: parseInt(newPlaylist.name)
    }
    currentPlaylist.push(createdPlaylist)
    setPlaylist(currentPlaylist)
    setNewPlaylist({ id: '', name: '', image: '', songs: []})
  }

  const handleChange = (e) => {
    setNewPlaylist({ ...newPlaylist, [e.target.name]: e.target.value })
  }

  useEffect (() => {
    getAlbums()
    getSongs()
    // getPlaylist()
  },[])


  return (
    <div className="App-header">
      {/* <h1>PLA-YE   LIST</h1> */}
      <header >
        <Nav />
        <Search />
      </header>
     
      <main>
      <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/albums' element={ <AlbumList/> } />
          <Route path='/playlists' element={ <Playlist />} />
          <Route path="/albums" element={ <AlbumList/>} />
          <Route path="/albums/:id" element={ <AlbumDeets albums={albums} getAlbums={getAlbums} />} />
          {/* <Route path="/albums/:id" element={ <AlbumDeets  />} /> */}
          
          <Route path="/songs" element={ <Song/>} />
          <Route path="/songs/:id" element={ <SongDeets albums={albums} getAlbums={getAlbums} />} />
          <Route path='new' element={ <Playlist 
                            newPlaylist= {newPlaylist} 
                            handleChange={handleChange} 
                            addPlaylist={addPlaylist}/>} />
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
