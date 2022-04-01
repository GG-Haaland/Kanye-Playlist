import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import EditAlbumForm from './EditAlbumForm'
// routes

const SongDeets = (props) => {
  let { id } = useParams();
 
  const [selectedSong, setSong] = useState({});

  useEffect(() => {
    const selectedSong = props.songs.find(
      (songs) => songs._id === id
     )
    setSong(selectedSong)
      console.log(selectedSong)
  }, [props.songs, id]);

  const deleteSong = async (id) => {
    await axios.delete(`http://localhost:4000/api/songs/${id}`)
    alert("Song was deleted!")
    // navigate('/albums')
  }


  return selectedSong ? (
    <div className="detail">
      <div className="detail-header">
          <h1>{selectedSong.album}</h1>
      </div>
      <div className="info-wrapper">
        <div style={{ display: "inline-block", justifyContent: "space-between", textAlign: "center" }}>
          <h3>{selectedSong.name}</h3>
          <h3>{selectedSong.features}</h3>
          <h4>{selectedSong.length}</h4>
          <button onClick={()=>deleteSong(id)}> Delete </button>
        </div>
        <p>{selectedSong.song}</p>
        <EditAlbumForm />
      </div>
    </div>
  ) : null;
};

export default SongDeets;


   
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// // routes

// const SongDeets = (props) => {
//   let { id } = useParams();

//   const [selectedSong, setSong] = useState({});

//   useEffect(() => {
//     const chosenSong = props.song.find(
//       (song) => song._id === id
//      )
//     setSong(chosenSong)
//       console.log(chosenSong)
//   }, []);


//   return selectedSong ? (
//     <div className="detail">
//       <div className="detail-header">
//         <img src={selectedSong.album_id} alt={selectedSong.name} />
//         <div
//           style={{
//             minWidth: "30em",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <h1>{selectedSong.name}</h1>
//         </div>
//       </div>
//       <div className="info-wrapper">
//         <div style={{ display: "inline-block", justifyContent: "space-between", textAlign: "center" }}>
//           <h3>RELEASE DATE: {selectedSong.released}</h3>
//           <h4>About {selectedSong.description}</h4>

//         </div>
//         <p>{selectedSong.song}</p>
//       </div>
//     </div>
//   ) : null;
// };

// export default SongDeets;