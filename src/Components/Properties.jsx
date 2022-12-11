import React from 'react';
import PropertiesBox from './PropertiesBox';
import price1 from '../Images/p1.png';
import price2 from '../Images/p2.png';
import price3 from '../Images/p3.png';

function Properties() {
  return (
    <div className='product'>
      <div className='p-heading'>
        <h3>Properties</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, provident!</p>
      </div>
      <div className='product-container'>
        <PropertiesBox image={price1} name="Property 1" price="500 000 $"/>
        <PropertiesBox image={price2} name="Property 2" price="400 000 $"/>
        <PropertiesBox image={price3} name="Property 3" price="800 000 $"/>

      </div>
    </div>
  )
}

export default Properties