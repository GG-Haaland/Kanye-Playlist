import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// routes

const AlbumDetails = (props) => {
  let { id } = useParams();
 
  const [selectedAlbum, setAlbum] = useState({});

  useEffect(() => {
    const chosenAlbum = props.albums.find(
      (albums) => albums._id === id
     )
    setAlbum(chosenAlbum)
      console.log(chosenAlbum)
  }, []);


  return selectedAlbum ? (
    <div className="detail">
      <div className="detail-header">
        <img src={selectedAlbum.image} alt={selectedAlbum.name} />
        <div
          style={{
            minWidth: "30em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>{selectedAlbum.name}</h1>
        </div>
      </div>
      <div className="info-wrapper">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>features: {selectedAlbum.features}</h3>
          <h4>About {selectedAlbum.description}</h4>
          
        </div>
        <p>{selectedAlbum.song}</p>
      </div>
    </div>
  ) : null;
};

export default AlbumDetails;
