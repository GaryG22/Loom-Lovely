import { useState } from 'react'
import Navbar from "./Navbar"
import Home from "./Home"
import Products from "./Products"
import './App.css'


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Products/>
    </>
  )
}

export default App
