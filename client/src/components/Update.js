import React from 'react'
import axios from 'axios'
import { useState } from 'react'


function Update({id}) {
    // console.log(props)
    
    const [update, setUpdate] = useState(false)
    const [name, setName] = useState('')
 
  

    const UpdateAlbum = async (e) => {
        e.preventDefault()
        await axios.put(`http://localhost:4000/api/albums/${id}`, {
          name
        })
        window.location.reload(true)
     }



  return (
    <div>
        {update?  
        
        <form onSubmit={(e)=>UpdateAlbum(e)}>
            <input name='Album'  type='text' placeholder='Change Album name' onChange={(e)=>setName(e.target.value)} ></input>
            <button className="search-button"   type='submit'> Submit</button>
        </form> : 
        
        <button className='delete-button' onClick={() => setUpdate(true)} >Update</button>}

    </div>
  )
}

export default Update