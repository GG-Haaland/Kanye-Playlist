// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import { useState } from 'react'
// import axios from 'axios'


// const EditAlbumForm = (props) => {
//   let navigate = useNavigate()
  
  
//     const url = `http://localhost:4000/api/albums/update-new`
//     const [data, setData] = useState({
//           name: '',
//           image:''
//    })
//     function submit (e) {
//          e.preventDefault()
//           axios.put(url, {
//           name: data.name,
         
//         })
//         .then(res => {
//            console.log(res.data)
//            navigate('/albums')
//         })
//       }
//         function onChange(e) {
//           const newdata = { ...data }
//           newdata[e.target.id] = e.target.value
//           setData(newdata)
//           console.log(newdata)
//         }

       
           
//         import React from 'react'
//         import { useState } from 'react'
//         import Axios from 'axios'
        
//         const AbilityForm = (props) => {
        
//           const [isEdit, setEdit] = useState(!props.ability)
//           const [data, setData] = useState(props.ability || {
//               tactical: '',
//               passive: '',
//               ultimate: '',
//           })
        
//           function submit (e) {
//             let url = `http://localhost:3001/api/legend/${props.legendId}/abilities/`
//             if (data._id) {
//               url += data._id
//             }
//             e.preventDefault()
//             const method = data._id ? Axios.put : Axios.post
//             method(url, {
//               tactical: data.tactical,
//               passive: data.passive,
//               ultimate: data.ultimate,
//             })
//             .then(res => {
//                 console.log(res.data)
//                 window.location.reload()
//             })
//             .catch((e) => {
//               console.error(`${isEdit ? `Update` : `Create`} Ability Failed`, e.message)
//             })
//           }
//           function onChange(e) {
//             const newdata = { ...data }
//             newdata[e.target.name] = e.target.value
//             setData(newdata)
//             console.log(newdata)
//           }
        
//           const onDelete = () => {
//             const url = `http://localhost:3001/api/legend/${props.legendId}/abilities/${data._id}`
//             Axios.delete(url).then((response) => {
//                 console.log(`Success`, response)
//                 window.location.reload()
//             }).catch(() => {
//                 console.log('Error')
//             })
//         }
        
//           const ValueField = ({ name, value }) => {
//             if (!isEdit) {
//               return value;
//             }
//             return (
//               <input
//                 type="textarea"
//                 name={name}
//                 placeholder={name}
//                 onChange={onChange}
//                 value={value}
//               />
//             );
//           };
        
        //   return (
        //     <div>
        //       {!isEdit && <button className='legend-close-button' onClick={() => {onDelete()}} >x</button>}
        //       {!isEdit && <button className='legend-edit-button' onClick={() => {setEdit(true)}} >Edit</button>}
        //       <form onSubmit={ submit }>
        //         <div>
        //           <ul>
        //               <li>Tactical Ability: <ValueField name={'tactical'} value={data.tactical}/></li>
        //               <li>Passive Ability: <ValueField name={'passive'} value={data.passive}/></li>
        //               <li>Ultimate Ability: <ValueField name={'ultimate'} value={data.ultimate}/></li>
        //           </ul>
        //         </div>
        //         {isEdit && <button className='submit-legend-button' type='submit'>Submit</button> }
        //         {isEdit && <button className='legend-cancel-button' onClick={() => {setEdit(false)}}>Cancel</button> }
        //       </form>
        //     </div>
        //   );
        // }
        
     
              
          //   //onSubmit handler
          //   const onSubmit = (albums) => {
          //     axios
          //       .put(
          //         "http://localhost:4000/api/playlist" +
          //           props.id,
          //         albums
          //       )
          //       .then((res) => {
          //         if (res.status === 200) {
          //           alert("Album updated");
          //           props.history.push("/albums");
          //         } else Promise.reject();
          //       })
          //       .catch((err) => alert("Something went wrong"));
          //   };
        // const updateAlbum = async (id) => {
        //     await axios.put(`http://localhost:4000/api/albums/${id}`)
        //     alert("Album was updated!")
        //   }
        

//   return (
//     <div>
//     <p>Change name</p>
//     <form onSubmit={ submit }>
//       <input type="text" id={'name'} name={'name'} placeholder={'Name'} onChange={(e) => onChange(e)}/>
//       {/* <input type="text" id={'image'} name={'image'} placeholder={'Album image'} onChange={(e) => onChange(e)}/> */}
//       <button>Submit</button>
//     </form>
//     </div>
//   );
// }

// export default  EditAlbumForm


// import React from 'react'
// import { useState } from 'react'
// import Axios from 'axios'

// const EditAlbumForm = (props) => {

//   const [isEdit, setEdit] = useState(!props.album)
//   const [data, setData] = useState(props.album || {
//       name: '',
//       // image: '',
//       // released: '',
//   })

//   function submit (e) {
//     let url = `http://localhost:4000/api/albums/${props.album._id}/update-new`
//     if (data._id) {
//       url += data._id
//     }
//     e.preventDefault()
//     const method = data._id ? Axios.put : Axios.post
//     method(url, {
//       name: data.name,
//       // image: data.image,
//       // released: data.released,
//     })
//     .then(res => {
//         console.log(res.data)
//         window.location.reload()
//     })
//     .catch((e) => {
//       console.error(`${isEdit ? `Update` : `Create`} Song Failed`, e.message)
//     })
//   }
//   function onChange(e) {
//     const newdata = { ...data }
//     newdata[e.target.name] = e.target.value
//     setData(newdata)
//     console.log(newdata)
//   }

//   const onDelete = () => {
//     const url = `http://localhost:3001/api/legend/${props.legendId}/abilities/${data._id}`
//     Axios.delete(url).then((response) => {
//         console.log(`Success`, response)
//         window.location.reload()
//     }).catch(() => {
//         console.log('Error')
//     })
// }

  // const ValueField = ({ name, value }) => {
  //   if (!isEdit) {
  //     return value;
  //   }
  //   return (
  //     <input
  //       type="textarea"
  //       name={name}
  //       placeholder={name}
  //       onChange={onChange}
  //       value={value}
  //     />
  //   );
  // };

//   return (
//     <div>
//       {/* {!isEdit && <button className='legend-close-button' onClick={() => {onDelete()}} >x</button>} */}
//       {!isEdit && <button className='legend-edit-button' onClick={() => {setEdit(true)}} >Edit</button>}
//       <form onSubmit={ submit }>
//         <div>
//           <ul>
//               <li>name: <ValueField name={'name'} value={data.name}/></li>
//               {/* <li>image: <ValueField name={'img'} value={data.image}/></li>
//               <li>released: <ValueField name={'Date'} value={data.released}/></li> */}
//           </ul>
//         </div>
//         {isEdit && <button className='submit-legend-button' type='submit'>Submit</button> }
//         {isEdit && <button className='legend-cancel-button' onClick={() => {setEdit(false)}}>Cancel</button> }
//       </form>
//     </div>
//   );
// }

// export default EditAlbumForm

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'



const EditAlbumForm = (props) => {
  let navigate = useNavigate()

 
    const url = 'http://localhost:4000/api/albums/:id'
    const [data, setData] = useState({
          name: '',
          // image: '',
          // released: '',
          
   })
    function submit (e) {
         e.preventDefault()
          axios.put(url, {
          name: data.name,
          // image: data.image,
          // released: data.released
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
      {/* <input type="text" id={'image'} name={'image'} placeholder={'Album image'} onChange={(e) => onChange(e)}/>
      <input type="date" id={'released'} name={'released'} placeholder={'Date'} onChange={(e) => onChange(e)}/> */}
      <button>Submit</button>
    </form>
    </div>
  );
}

export default EditAlbumForm
