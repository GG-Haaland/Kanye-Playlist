import React from 'react'
import { useState,  } from 'react'
import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
import Search from '../components/Search'
import AlbumList from './AlbumList.js'
import AlbumDeets from './AlbumDeets'


const Home = (props) => {

  const [searchResults, setSearchResults] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  const searchOnChange = (e) => {
    const value = e.target.value
    console.log(value)
    setSearchQuery(value)
  }

  const searchOnSubmit = function (e)  {
    // const albums = await axios.get('http://localhost:4000/albums')
   
    const albums = props.albums
    let results = albums.filter((albums) => {
      return albums.name.toLowerCase().includes(searchQuery.toLowerCase())
    })
    console.log(results)

    setSearchResults(results)
    // setAlbums(albumList.data.albums)
    // console.log(albumList)
  }

  let navigate = useNavigate()

  const showAlbums = (albums) => {
    navigate(`albums/${albums._id}`)
  }

  return (
    <div className="home">
      <h1>Albums! </h1>
      <Search onSubmit={searchOnSubmit} onChange={searchOnChange} value={searchQuery}/>
      <div className="search">
        <h3>Showing Results for: {searchQuery}</h3>
        <section className="search-results container-grid">
          {searchResults.map((result) => {
            return <AlbumDeets key={result._id} onClick={() => showAlbums(result)} image={result.imgage} name={result.name} />

          })}
        </section>
        <img className="kanye-head" src="https://lh3.googleusercontent.com/M5w4BUCEXfD4NS_Lry8ixxBuRepcWbc2HrRJU3SnfbT7-QlPXgmtASHACCQsyz5zLAfOQ7gYvpn7QxuWQ19Rz3RhGeiFlPhK2MXpOkyMn8-KmDVGE3-thUMM6YCvqjtHWU_pGFr8Tg=w2400" /> 
      </div>
      </div>
  )
}

export default Home