import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import Footer from './Footer'
import Trainers from './Trainers'
import Contact from './Contact'
import { Route, Routes } from 'react-router-dom'



function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HeroSection/>}/>
        <Route path='/trainers' element={<Trainers/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      {/* <HeroSection/> */}
            
      <Footer/>
    </>
  )
}

export default App
