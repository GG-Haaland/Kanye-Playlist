import React from 'react'
import { useNavigate } from 'react-router-dom'

const Playlist = (props) => {

    // return (
    //     <div>
    //     <h1>Add A New Boat Listing</h1>
    //     <form >
    //       <input type="text" value= 'name' name='name' placeholder={'name'} />
    //       <input type="text" value={'img'} name={'img'} placeholder={'image'} />
    //       <input type="text-area" value={'name'} onChange={ props.handleChange} name={'description'} placeholder={'description'} />
    //       {/* <input type="text" value={newAlbum.price} onChange={ props.handleChange} name={'price'} placeholder={'price'} /> */}
    //       <button>Submit</button>
    //     </form>
    //     </div>
    //   );

  let navigate = useNavigate()
  
  const handleSubmit = (e) => {
    props.addPlaylist(e)
    navigate('/playlists')
  }

//   const newAlbum = props.newAlbum

  return (
    <div>
    <h1>Create a Pla-YE List </h1>
    <form onSubmit={ handleSubmit }>
      <input type="text" value={'newAlbum.name'} onChange={ props.handleChange} name={'name'} placeholder={'name'} />
      <input type="text" value={'newAlbum.img'} onChange={ props.handleChange} name={'img'} placeholder={'image'} />
      <input type="text-area" value={'newAlbum.description'} onChange={ props.handleChange} name={'description'} placeholder={'description'} />
      {/* <input type="text" value={newAlbum.price} onChange={ props.handleChange} name={'price'} placeholder={'price'} /> */}
      <button>Submit</button>
    </form>
    </div>
  );
}

export default Playlist
