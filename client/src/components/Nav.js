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
        <li><Link to='/about'>PHOTOS</Link></li>
        </ul>
        
     
        
        <div className='bckbtn' onClick={() => navigate(-1)}><img className="kanye-head"src="https://lh3.googleusercontent.com/M5w4BUCEXfD4NS_Lry8ixxBuRepcWbc2HrRJU3SnfbT7-QlPXgmtASHACCQsyz5zLAfOQ7gYvpn7QxuWQ19Rz3RhGeiFlPhK2MXpOkyMn8-KmDVGE3-thUMM6YCvqjtHWU_pGFr8Tg=w2400" alt="kanye-head" /></div>
      </div>
    </nav>
  )
}

export default Nav

