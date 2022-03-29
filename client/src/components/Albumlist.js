import React from "react";
// import logo from '../logo.svg'
// import { useNavigate } from "react-router-dom";
// import { useState, useEffect } from 'react'
// import axios from 'axios'

const AlbumList = () => {
//   let navigate = useNavigate();
//   const showDino = (dino) => {
//     navigate(`${dino.id_number}`);
//   };

//   const [dinos,setDinos] = useState([])
  
//   const getDinos = async() => {
//     const dinoList = await axios.get('https://jurassic-master.herokuapp.com/api/dinos')
//     setDinos(dinoList.data.dinos)
//     console.log(dinos)
//   }
//   useEffect(() =>{
//     getDinos()
//   },[])


  return (
    <div className="album-grid">
      
      <img src='https://images.genius.com/3dd435384396a2abbac6dbc4e84f9bb6.500x500x19.gif' />
    </div>
  );
};
export default AlbumList;
