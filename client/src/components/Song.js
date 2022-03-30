
  import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'


const SongList = () => {
  
  let navigate = useNavigate();  
  const showSong = (song) => {
    navigate(`${song._id}`);
  };

  const [songs,setSongs] = useState([])
  
  const getSongs = async() => {
    const songList = await axios.get('http://localhost:4000/api/songs') 
    setSongs(songList.data.song)
    console.log(songList)
  }
  
  useEffect(() =>{
    getSongs()
  },[])

  return (
    <div className="album-grid">
    {songs.map((song) => (
      <div className="card" onClick={() => showSong(song)} key={song._id}>
        {/* <img style={{ display: "block" }} src={song.image} alt={song.name} /> */}
        <h3>{song.name}</h3>
        <h4>{song.features}</h4>
      </div>
    ))}
  </div>
   
  
  );
};

export default SongList;
//     <div className="card" onClick={props.onClick}>
//     <div className="img-wrapper">
//       <img src={props.image} alt={props.image} />
//     </div>
//     <div className="info-wrapper flex-col">
//       <h3>{props.name}</h3>
//       {/* <p>{props.description}</p>
//       <p>{props.height}</p>
//       <p>{props.description}</p>
//       <p>{props.description}</p> */}
//     </div>
//   </div>
// }

