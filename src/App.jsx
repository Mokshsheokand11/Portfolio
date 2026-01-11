import React from 'react'
import Navbar from "./components/Navbar.jsx"
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Potfolio from "./components/Portfolio.jsx"
import Experience from './components/Experience.jsx'
import Contact from './components/contact.jsx'
import Footer from './components/Footer.jsx'
import { Toaster } from 'react-hot-toast'
function App() {
  return (
    <>
    <div className="pt-24">
   <Navbar/>
   <Home/>
   <About/>
   <Potfolio/>
   <Experience/>
   <Contact/> 
   <Footer/>  
    </div>
    <Toaster/>
    </>
  )
}

export default App
