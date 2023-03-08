import { useState } from 'react'
import './App.css'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import About from './sections/About/About'
import Awards from './sections/Awards/Awards'
import Cheif from './sections/Cheif/Cheif'
import FindUs from './sections/Find/FindUs'
import Gallery from './sections/Gallery/Gallery'
import Home from './sections/Home/Home'
import Menu from './sections/Menu/Menu'
import Video from './sections/Video/Video'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Menu/>
      <Cheif/>
      <Video/>
      <Awards/>
      <Gallery/>
      <FindUs/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
