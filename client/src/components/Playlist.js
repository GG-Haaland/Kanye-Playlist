import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'


const PlaylistForm = (props) => {
  let navigate = useNavigate()
  
    // const url = 'http://localhost:4000/api/albums'
    const url = 'http://localhost:4000/api/playlist'
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

