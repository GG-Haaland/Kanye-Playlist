import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'



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
  // const deleteAlbum = async (album) => {
  //   await axios.get('http://localhost:4000/api/albums')
  // }
  
  useEffect(() =>{
    getAlbums()
    // deleteAlbum()
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









