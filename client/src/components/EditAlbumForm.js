import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'


const EditAlbumForm = (props) => {
  let navigate = useNavigate()
  
    // const url = 'http://localhost:4000/api/albums'
    const url = `http://localhost:4000/api/albums/update-album/:id`
    const [data, setData] = useState({
          name: '',
          image: '',
          
   })
    function submit (e) {
         e.preventDefault()
          axios.put(url, {
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

        // const updateAlbum = async (id) => {
        //     await axios.put(`http://localhost:4000/api/albums/${id}`)
        //     alert("Album was updated!")
        //   }
        

  return (
    <div>
    <h1>EditAlbum</h1>
    <form onSubmit={ submit }>
      <input type="text" id={'name'} name={'name'} placeholder={'Name'} onChange={(e) => onChange(e)}/>
      <input type="text" id={'image'} name={'image'} placeholder={'Album image'} onChange={(e) => onChange(e)}/>
      <button>Submit</button>
    </form>
    </div>
  );
}

export default  EditAlbumForm
