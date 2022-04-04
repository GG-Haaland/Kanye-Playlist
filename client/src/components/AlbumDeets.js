import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate} from "react-router-dom";
import axios from 'axios'
import EditAlbumForm from './EditAlbumForm'

// import { useNavigate } from 'react-router-dom'


const AlbumDeets = (props) => {
  let navigate = useNavigate()
  let { id } = useParams();
 
  const [selectedAlbum, setAlbum] = useState('');
 
          useEffect(() => {
              let selectedAlbum = props.albums.find(
                (album) => album._id === (id)
                )
                setAlbum(selectedAlbum)
                console.log(selectedAlbum)
          }, [props.albums, id]);

  const [selectedSongs,setSelectedSongs] = useState('')

  useEffect(() => {
    console.log(id)
    let selectedSongs = props.songs.filter(
    (song) => song.album_id === (id)
    )
    setSelectedSongs(selectedSongs)
}, [props.albums, props.songs, id])


     
          const deleteAlbum = async (id) => {
            await axios.delete(`http://localhost:4000/api/albums/${id}`)
            alert("Album was deleted!")
            .then(res => {
              
              navigate('/albums')
           })
          }
          
          const updateAlbum = async (id) => {
            await axios.put(`http://localhost:4000/api/albums/${id}`)
            alert("Album was updated!")
          }

        // function refreshPage() { 
        //     window. location. reload(false); } 

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
        <p style={{marginLeft: "20%", marginRight: "20%"}}> {selectedAlbum.description}</p>
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
              <div className='song-details'>
                       <h3>{selectedSongs.map((song) =>
                            <EditAlbumForm albumId={id} key={song._id} song={song} />
                        )}</h3> 
                        <div className='song-form'>
                            <h3>Add A New Song</h3>
                            <EditAlbumForm albumId={id}/>
                        </div>
              </div>        
                <Link to='/songs'><button>Songs</button></Link>
              </div>
              <button onClick={()=>deleteAlbum(id)}> Delete </button>
              {/* <EditAlbumForm onClick={()=>updateAlbum()}/> */}
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

