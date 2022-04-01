import React, { useEffect, useState } from "react";
import { useParams, Link} from "react-router-dom";
import axios from 'axios'
import EditAlbumForm from './EditAlbumForm'

// import { useNavigate } from 'react-router-dom'


const AlbumDeets = (props) => {
  // let navigate = useNavigate()
  let { id } = useParams();
 
  const [selectedAlbum, setAlbum] = useState('');
 
          useEffect(() => {
              const selectedAlbum = props.albums.find(
                (album) => album._id === (id)
                )
                setAlbum(selectedAlbum)
                console.log(selectedAlbum)
          }, [props.albums, props.songs,id]);

  const [selectedSongs,setSelectedSongs] = useState('')

          useEffect(() => {
            // console.log(props.song)
            const selectedSongs = props.songs.filter(
              (song) => song.album_id === (id)
              )
              
            setSelectedSongs(selectedSongs)
            console.log(selectedSongs)
              
          }, [props.albums, props.songs, id]);
     
          const deleteAlbum = async (id) => {
            await axios.delete(`http://localhost:4000/api/albums/${id}`)
            alert("Album was deleted!")
            // navigate('/albums')
          }
          
          const updateAlbum = async (id) => {
            await axios.put(`http://localhost:4000/api/albums/update-new/:id`)
            alert("Album was updated!")
          }

        function refreshPage() { 
            window. location. reload(false); } 

  return selectedAlbum ? (
  <div className="detail">
    <div className="detail-header">
        <h1>{selectedAlbum.name}</h1>
        <img className="front-face" src={selectedAlbum.image} alt={selectedAlbum.name} width="400" height="400"  />
        <img className="back-face" src={selectedAlbum.image2} alt={selectedAlbum.name} width="400" height="400" />
    </div>
    <div className="info-wrapper">
      <div style={{ display: "inline-block", justifyContent: "space-between", textAlign: "center" }}>
        <h3>RELEASE DATE: {selectedAlbum.released}</h3>
        <p style={{marginLeft: "20%", marginRight: "20%"}}>About: {selectedAlbum.description}</p>
          <div className="song-list">
               {selectedSongs.map((song) => 
                  <div key={song._id}>
                  <ol>
                      <li>{song.name}</li>
                  </ol>
                  </div>
                  )}
              </div>
              <div>
                <Link to='/songs'><button>Songs</button></Link>
              </div>
              <button onClick={()=>deleteAlbum(id)}> Delete </button>
              {/* <button>Delete</button> */}
              <EditAlbumForm onClick={()=>updateAlbum(id)}/>
      </div>
    </div>
  </div>

  ) : null;
};


export default AlbumDeets;

///////////////// GET SONGS TO SHOW ON ALBUMS //////////////////////////////////////////////////////////////////

    //   const getArtistAlbums = async (req, res) => {
        //     try {
        //         const { id } = req.params
        //         const artist = await Artist.findById(id).exec()
        //         const albums = await Album.find({artistName: artist.artistName}).exec()
        //         return res.status(200).json({ albums })
        //     } catch (error) {
        //         return res.status(500).send(error.message)
        //     }
        // }

