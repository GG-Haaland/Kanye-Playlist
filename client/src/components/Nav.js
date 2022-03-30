import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Nav = () => {
  let navigate = useNavigate()
  
  return (
    <nav className="navbar">
        {/* <img src='https://www.pluggedin.com/wp-content/uploads/2020/01/Kanye-West-The-Life-of-Pablo-review-image638x366.jpg-1200x688.jpeg' alt="Pablo orange" id="logo" /> */}
      <h1>Pla-Ye list</h1>
      <div className="nav-links">

        <ul>
        <li><Link to='/'>HOME</Link></li>
        <li><Link to='/albums'>ALBUMS</Link></li>
        <li><Link to='/playlists'>PLAYLIST</Link></li>
        <li><Link to='/songs'>SONGS</Link></li>
        <li><Link to='/about'>ABOUT</Link></li>
        
        </ul>
        
        {/* <Link to='/'>Home</Link>
        <Link to='/albums'>Albums!</Link>
        <Link to='/playlists'>Playlist</Link>
        <Link to='/about'>About</Link>
        <Link to='/songs'>Songs</Link> */}
        
        <div className='bckbtn' onClick={() => navigate(-1)}>Back</div>
      </div>
    </nav>
  )
}

export default Nav

