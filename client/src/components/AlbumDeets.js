import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate} from "react-router-dom";
import axios from 'axios'
import Update from './Update'




const AlbumDeets = (props) => {
  let navigate = useNavigate()
  let { id } = useParams();
 
  const [selectedAlbum, setAlbum] = useState('');
  const [selectedSongs,setSelectedSongs] = useState('')
 
          useEffect(() => {
              let selectedAlbum = props.albums.find(
                (album) => album._id === (id)
                )
                setAlbum(selectedAlbum)
                console.log(selectedAlbum)
          }, [props.albums, id]);


//   useEffect(() => {
//     console.log(id)
//     let selectedSongs = props.songs.filter(
//     (song) => song.album_id === (id)
//     )
//     setSelectedSongs(selectedSongs)
// }, [props.albums, props.songs, id])


     
          const deleteAlbum = async (id) => {
            await axios.delete(`http://localhost:4000/api/albums/${id}`)
            alert("Album was deleted!")
            .then(res => {
              
              navigate('/albums')
           })
          }
          

  return selectedAlbum ? (
  <div className="detail">
      <div className="detail-header">
          <h1>{selectedAlbum.name}</h1>
          <img className="front-face" src={selectedAlbum.image} alt={selectedAlbum.name} width="400" height="400"  />
          <img className="back-face" src={selectedAlbum.image2} alt={selectedAlbum.name} width="400" height="400" />
      </div>
        <div>   
              <button onClick={()=>deleteAlbum(id)}> Delete </button>
              <Update id={selectedAlbum._id} />
        </div>
      <div className="info-wrapper">
        <div style={{ display: "inline-block", justifyContent: "space-between", textAlign: "center" }}>
          <h3>RELEASE DATE: {selectedAlbum.released}</h3>
          <p style={{marginLeft: "20%", marginRight: "20%"}}> {selectedAlbum.description}</p>
          <Link to='/songs'><button>Songs</button></Link>
        </div>
      </div>
  </div>

  ) : null;
};


export default AlbumDeets;


