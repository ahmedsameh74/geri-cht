import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import About from './sections/About/About'
import Cheif from './sections/Cheif/Cheif'
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
    </div>
  )
}

export default App
