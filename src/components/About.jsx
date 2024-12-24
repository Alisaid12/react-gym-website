import React from 'react'
import aboutimage from '../images/about.png'

function About() {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={aboutimage}></img>
          </div>
          <div className='about-text'>
              <h1>LEARN MORE ABOUT US</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel porro, unde beatae earum neque voluptatum fuga nihil iste voluptas laudantium. Dolore, magnam?</p>
              <button>READ MORE</button>
          </div>
          
    </div>
  )
}

export default About
