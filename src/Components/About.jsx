import React from 'react';
import aboutImage from '../Images/hero.png'

function About() {
  return (
    <div className='about'>
        <div className='about-model'>
            <img src={aboutImage}></img>
        </div>
        <div className='about-text'>
            <h2>We Are The Best <br/>Real Estate Company</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eos laudantium quod quisquam culpa quibusdam voluptatum adipisci nisi sed totam ipsam consequatur odio asperiores, ea fuga est laboriosam recusandae voluptates.</p>
            <button>View More Details</button>
        </div>
    </div>
  )
}

export default About