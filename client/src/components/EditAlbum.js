// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import PlaylistForm from "./Playlist";
import EditAlbumForm from './EditAlbumForm'
  
// EditStudent Component
const EditAlbum = (props) => {
  const [formValues, setFormValues] = useState({
    name: "",
    image: ''
  });
    
  //onSubmit handler
  const onSubmit = (albums) => {
    axios
      .put(
        "http://localhost:4000/api/playlist" +
          props.id,
        albums
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Album updated");
          props.history.push("/albums");
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };
  
  // Load data from server and reinitialize student form
  useEffect(() => {
    axios
      .get(
        "http://localhost:4000/api/albums" 
        + props.id
      )
      .then((res) => {
        const { name, image } = res.data;
        setFormValues({ name, image});
      })
      .catch((err) => console.log(err));
  }, []);
  
  // Return student form
  return (
    <EditAlbumForm />
      
   
  );
};
  
// Export EditStudent Component
export default EditAlbum;