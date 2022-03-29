// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import Albumlist from './components/Albumlist'
import Playlist from './components/Playlist'
import AlbumDetails from './components/AlbumDeets'

function App() {

    //   const [newUser, setNewUser] =useState({
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     age: ''
    // })

    // const addUser = (e) => {
    //     e.preventDefault()
        
    // }
    // const handleChange = (e) => {
    //     setNewUser({...newUser, [e.target.name]: e.target.value})
    // }


    const [albums,setAlbums] = useState()

    const getAlbums = async() => {
      const albumList = await fetch('http://localhost:4000/albums') /*axios.get('https://jurassic-master.herokuapp.com/api/dinos')*/
      setAlbums(albumList.data.id)
      console.log(albumList)
    }
    useEffect(() =>{
      getAlbums()
    },[])

  return (
    <div className="App-header">
      <h1>PLA-YE   LIST</h1>
      <header >
        <Nav />
       
      </header>
     
      <main>
      <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/albums' element={ <Albumlist/> } />
          <Route path='/playlists' element={ <Playlist />} />
          <Route path="/albums" element={ <Albumlist/>} />
          {/* <Route path="/albums/:id" element={ <AlbumDetails  />} /> */}
          <Route path="/albums/:id" element={ <AlbumDetails album={albums} getAlbums={getAlbums} />} />
          {/* <Route path='/restaurants' element={<Restaurants/>}/>
          <Route path='/tickets' element={<Tickets/>}/>
          <Route path='/rides' element={<Rides/>}/>
          <Route path='/joinform' element={ <JoinForm 
        newUser={newUser}
        handleChange={handleChange}
        addUser={addUser}/>} /> */}
        </Routes>
        </main>
    </div>
  );
}

export default App;
