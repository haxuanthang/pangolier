import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Featured from '../components/Featured'
import About from '../components/About'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'
import CustomCursor from '../CustomCursor'

import '../styles/home.scss'


const Home = () => {
  const [preloader, setPreloader] = useState(true);


  return (
    <>
      <CustomCursor />

      <div className="main-container" id='main-container'>
        <Navbar />
        <Header />
        <Featured />
        <About />
        <Gallery />
        <Footer />
      </div>
    </>
  )
}

export default Home
