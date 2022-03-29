import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import Albumlist from './components/Albumlist'

function App() {
  return (
    <div className="App-header">
     
      <header >
        <Nav />
      </header>
      <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/albums' element={ <Albumlist/> } />
          {/* <Route path='/attractions' element={ <Attractions />} />
          <Route path="/dinosaurs" element={ <DinoList/>} />
          <Route path="/dinosaurs/:id" element={ <DinoDeets dinos={dinos} getDinos={getDinos} />} />
          <Route path='/restaurants' element={<Restaurants/>}/>
          <Route path='/tickets' element={<Tickets/>}/>
          <Route path='/rides' element={<Rides/>}/>
          <Route path='/joinform' element={ <JoinForm 
        newUser={newUser}
        handleChange={handleChange}
        addUser={addUser}/>} /> */}
        </Routes>
      
    </div>
  );
}

export default App;
