import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import PlaylistForm from './Playlist'


const AlbumList = () => {

  let navigate = useNavigate();  

  const showAlbum = (album) => {
    navigate(`${album._id}`);
  };

  const [albums,setAlbums] = useState([])
 
  const getAlbums = async() => {
    const albumList = await axios.get('http://localhost:4000/api/albums')
    setAlbums(albumList.data.albums)
    console.log(albumList)
  }
  
  
  useEffect(() =>{
    getAlbums()
  },[])
  


  return (
    <div className="album-grid">
    {albums.map((album) => (
      <div className="card" onClick={() => showAlbum(album)} key={album._id}>
        <img className="album-img" style={{ display: "inline-block" }} src={album.image} alt={album.name}  />
        <h3>{album.name}</h3>
      </div>
    ))}
    {/* <div>
      <PlaylistForm/>
    </div> */}
  </div>
  
   
  
  );
};

export default AlbumList;


// import logo from '../logo.svg'
// import { useNavigate } from "react-router-dom";






// const AlbumList = (props) => {

  
//       let navigate = useNavigate()
    
//       const showAlbums = (albums) => {
//         navigate(`${albums._id}`)
//       }
//     console.log(props.albums)
//       return (
//         <div className="parks-grid">
//           {
//           props.albums.map((albums) => (
//             <div className="album-card" onClick={() => showAlbums(albums)} key={albums._id}>
//               <h3>{albums.name}</h3>
//               <img style={{ display: 'block' }} src={albums.img} alt={albums.name} />
              
//             </div>
//           ))} 
//         </div>
        
//       )
//     }
    
//     export default AlbumList

// export default AlbumList