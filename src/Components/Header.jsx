import React from 'react';
import NavigationBar from './NavigationBar';
import logo from '../Images/header-bg.png';


function Header() {
  return (
    <div className='header'>
      <NavigationBar/>
      <div className='intro'>
        <p>Looking for a property?</p>
        <h1><span>Buy</span> and <span>Sell</span> Properties</h1>
        <p className='details'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, libero modi sint deserunt perferendis, accusamus nemo reiciendis sequi, quaerat officiis quos inventore quasi distinctio accusantium earum suscipit dolore aliquam tempore.</p>
        <a href='#' className='header-btn'>Details</a>
      </div>
    </div>
  )
}

export default Header;