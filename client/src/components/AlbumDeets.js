import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// routes

const AlbumDetails = (props) => {
  let { id } = useParams();
 
  const [selectedAlbum, setAlbum] = useState({});

  useEffect(() => {
    const chosenAlbum = props.album.find((album) => album.id_number === id);
    setAlbum(chosenAlbum);
  }, [props.album]);

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
          <h3>Details {selectedAlbum.details}</h3>
          <h3>whateverelse {selectedAlbum.whateverelse}</h3>
        </div>
        <p>{selectedAlbum.song}</p>
      </div>
    </div>
  ) : null;
};

export default AlbumDetails;
