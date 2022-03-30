import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Search from '../components/Search'
import Albumlist from '../components/Albumlist.js'


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
    let results = albums.filter((album) => {
      return album.name.toLowerCase().includes(searchQuery.toLowerCase())
    })
    console.log(results)

    setSearchResults(results)
    // setAlbums(albumList.data.albums)
    // console.log(albumList)
  }

  let navigate = useNavigate()

  const showAlbums = (Albums) => {
    navigate(`Albums/${Albums._id}`)
  }

  return (
    <div className="home">
      <h1>Albums! </h1>
      <Search onSubmit={searchOnSubmit} onChange={searchOnChange} value={searchQuery}/>
      <div className="search">
        <h3>Showing Results for: {searchQuery}</h3>
        <section className="search-results container-grid">
          {searchResults.map((result) => {
            return <Albumlist key={result._id} onClick={() => showAlbums(result)} image={result.img} name={result.name} />

          })}
        </section>
      </div>
      </div>
  )
}

export default Home