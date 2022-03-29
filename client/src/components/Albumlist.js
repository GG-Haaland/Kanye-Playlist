import React from "react";
// import logo from '../logo.svg'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from 'axios'

const AlbumList = () => {
  let navigate = useNavigate();  
  const showAlbum = (album) => {
    navigate(`${album.id_number}`);
  };

  const [albums,setAlbums] = useState([])
  
  const getAlbums = async() => {
    const albumList = await fetch('http://localhost:4000/albums') /*axios.get('https://jurassic-master.herokuapp.com/api/dinos')*/
    setAlbums(albumList.data.id)
    console.log(albumList)
  }
  useEffect(() =>{
    getAlbums()
  },[])


  return (
    <div className="album-grid">
    {albums.map((album) => (
      <div className="album-card" onClick={() => showAlbum(album)} key={album.id_number}>
        <img style={{ display: "block" }} src={album.image} alt={album.name} />
        <h3>{album.name}</h3>
      </div>
    ))}
  </div>
      //   <img src='https://images.genius.com/3dd435384396a2abbac6dbc4e84f9bb6.500x500x19.gif' />
      // </div>
  
  );
};
export default AlbumList;
