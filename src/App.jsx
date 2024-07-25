import { useState } from 'react'
// import './App.css'
import Navbar1 from './Components/Nav/Navbar1'
import 'bootstrap/dist/css/bootstrap.min.css';
import  Home from './Components/Home'
import Portofolio from './Components/Portofolio';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  

  return (
    <>
      <div>
     <Navbar1 />
     <Home />
     <Portofolio />
     <About />
     <Contact />
     <Footer />
      </div>
      
     
    
    </>
  )
}

export default App
