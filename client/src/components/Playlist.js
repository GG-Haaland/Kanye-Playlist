import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'


const PlaylistForm = (props) => {
  let navigate = useNavigate()
  
    const url = 'http://localhost:4000/api/albums'
    const [data, setData] = useState({
          name: '',
          image: '',
          
   })
    function submit (e) {
         e.preventDefault()
          axios.post(url, {
          name: data.name,
          image: data.image
        })
        .then(res => {
           console.log(res.data)
           navigate('/albums')
        })
      }
        function onChange(e) {
          const newdata = { ...data }
          newdata[e.target.id] = e.target.value
          setData(newdata)
          console.log(newdata)
        }

  return (
    <div>
    <h1>CREATE A KANYE ALBUM</h1>
    <form onSubmit={ submit }>
      <input type="text" id={'name'} name={'name'} placeholder={'Name'} onChange={(e) => onChange(e)}/>
      <input type="text" id={'image'} name={'image'} placeholder={'Image URL'} onChange={(e) => onChange(e)}/>
      <button>Submit</button>
    </form>
    </div>
  );
}

export default PlaylistForm

// const PlaylistForm = (props) => {

//   let navigate = useNavigate()
  
//   const handleSubmit = (e) => {
//     props.addAlbum(e)
//     navigate('/albums')
//   }

//   const newAlbum = props.newAlbum
// console.log(newAlbum)
//   return (
//     <div>
//     <h1>Add An Album</h1>
//     <form onSubmit={ handleSubmit }>
//       <input type="text" value={newAlbum.name} onChange={ props.handleChange} name={'name'} placeholder={'Playlist name'} />
//       <input type="text" value={newAlbum.image} onChange={ props.handleChange} name={'image'} placeholder={'Cover image'} />
//       {/* <input type="text" value={newAlbum.released} onChange={ props.handleChange} name={'Date'} placeholder={'Date'} /> */}
      
//       <button> <img className="kanye-head" src="https://lh3.googleusercontent.com/M5w4BUCEXfD4NS_Lry8ixxBuRepcWbc2HrRJU3SnfbT7-QlPXgmtASHACCQsyz5zLAfOQ7gYvpn7QxuWQ19Rz3RhGeiFlPhK2MXpOkyMn8-KmDVGE3-thUMM6YCvqjtHWU_pGFr8Tg=w2400" /> </button>
//     </form>
//     </div>
//   );
// }

// export default PlaylistForm








// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// const Playlist = (props) => {




//     let navigate = useNavigate()
    
//     const handleSubmit = (e) => {
//       props.addBoat(e)
//       navigate('/playlists')
//     }
  
//     const newPlaylist = props.newPlaylist
  
//     return (
//       <div>
//       <h1>Create a Pla-YE List</h1>
//       <form onSubmit={ handleSubmit }>
//         <input type="text" value={newPlaylist.name} onChange={ props.handleChange} name={'name'} placeholder={'name'} />
//         <input type="text" value={newPlaylist.img} onChange={ props.handleChange} name={'img'} placeholder={'image'} />
//         {/* <input type="text-area" value={newPlaylist.description} onChange={ props.handleChange} name={'description'} placeholder={'description'} />
//         <input type="text" value={newPlaylist.price} onChange={ props.handleChange} name={'price'} placeholder={'price'} /> */}
//         <button>Submit</button>
//       </form>
//       </div>
//     );
//   }


// export default Playlist
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

//   let navigate = useNavigate()
  
//   const handleSubmit = (e) => {
//     props.addPlaylist(e)
//     navigate('/playlists')
//   }

// //   const newAlbum = props.newAlbum

//   return (
//     <div>
//        <div className="sunday"></div>
//     <h1>Create a Pla-YE List </h1>
//     <form onSubmit={ handleSubmit }>
//       <input type="text" value={'newAlbum.name'} onChange={ props.handleChange} name={'name'} placeholder={'name'} />
//       <input type="text" value={'newAlbum.img'} onChange={ props.handleChange} name={'img'} placeholder={'image'} />
//       <input type="text-area" value={'newAlbum.description'} onChange={ props.handleChange} name={'description'} placeholder={'description'} />
//       {/* <input type="text" value={newAlbum.price} onChange={ props.handleChange} name={'price'} placeholder={'price'} /> */}
//       <button>Submit</button>
//     </form>
   
//     {/* <img  src="https://i.makeagif.com/media/3-11-2019/Or5DqK.gif"/> */}
//     </div>
//   );

