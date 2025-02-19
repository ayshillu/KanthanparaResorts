import { useState } from 'react'
import './App.css'

import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Activities from './Components/Activities/Activities'
import Offers from './Components/Offers/Offers'
import Contact from './Components/Contact/Contact'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'
import Room from './Components/Rooms/Room'
function App() {

  return (
    <>
    <Navbar />
    <Home/>
    <Room/>
    {/* <About/>
    <Activities/>
    <Offers/>
    <Contact/>
    <Login/>
    <Signup/> */}
    </>
  )
}

export default App
