import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Nav = () => {
  let navigate = useNavigate()
  
  return (
    <nav className="navbar">
        {/* <img src='https://www.pluggedin.com/wp-content/uploads/2020/01/Kanye-West-The-Life-of-Pablo-review-image638x366.jpg-1200x688.jpeg' alt="Pablo orange" id="logo" /> */}
      {/* <h4>Pl-Ye list</h4> */}
      <div>
        <Link to='/'>Home</Link>
        <Link to='/albums'>Albums!</Link>
        <Link to='/playlists'>Playlist</Link>
        <Link to='/about'>About</Link>
        
        <div className='bckbtn' onClick={() => navigate(-1)}>Back</div>
      </div>
    </nav>
  )
}

export default Nav