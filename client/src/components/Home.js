import React from 'react'
import { useState,  } from 'react'
import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
import Search from '../components/Search'
import AlbumList from './AlbumList.js'
import AlbumDeets from './AlbumDeets'
import ImageSlider from './ImageSlider'
import { SliderData } from './SliderData'

const Home = (props) => {

  const [searchResults, setSearchResults] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  const searchOnChange = (e) => {
    const value = e.target.value
    console.log(value)
    setSearchQuery(value)
  }

  const searchOnSubmit = function (e)  {
    const albums = props.albums
    let results = albums.filter((album) => {
      return album.toLowerCase().includes(searchQuery.toLowerCase())
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
      <ImageSlider slides={SliderData}/>
      <h1>Search Albums! </h1>
      <Search onSubmit={searchOnSubmit} onChange={searchOnChange} value={searchQuery}/>
      <div className="search">
        <h3>Showing Results for: {searchQuery}</h3>
        <section className="search-results container-grid">
          {searchResults.map((result) => {
            return <AlbumDeets key={result._id} onClick={() => showAlbums(result)} image={result.imgage} name={result.name} />

          })}
        </section>

      </div>
      
      </div>
  )
}

export default Home