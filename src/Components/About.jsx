import React from 'react'

import './About.css' 

export default function About() {
  return (
    <div  className='containe'>
      <h1 className='editcontact1'>About </h1>
         <div class="about-section1">
         <div className="about-divider">
        <div class="line1"></div>
        <div class="star1"></div>
        <div class="line1"></div>
    </div>
    </div>
      
      
      <div className="editp-grid">
       <div className='editp'> <p>
    Freelancer is a free bootstrap <br /> theme created by Route. <br />
    The  <br /> download includes the <br /> complete source files including <br /> HTML, CSS, and JavaScript as <br /> well as optional SASS  <br /> stylesheets for easy <br /> customization.
  </p></div>
  <div className='editp2'> <p>
  You can create your own <br /> custom avatar for the <br /> masthead , change the icon <br /> in the dividers, and add your email <br /> address to the contact form to  <br />make it fully functional
  </p></div>
  </div>
      </div>
    
  )
}
