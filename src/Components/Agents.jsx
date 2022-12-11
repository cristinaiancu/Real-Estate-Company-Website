import React from 'react';
import AgentsBox from './AgentsBox';
import agentImage1 from '../Images/s1.png';
import agentImage2 from '../Images/s2.png';
import agentImage3 from '../Images/s3.png';


function Agents() {
  return (
    <div>
        <div className='agent'>
            <div className='a-heading'>
                <h1>Agents</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, ad.</p>
            </div>
            <div className='b-container'>
                <AgentsBox image={agentImage1} name="Agent1"/>
                <AgentsBox image={agentImage2} name="Agent2"/>
                <AgentsBox image={agentImage3} name="Agent3"/>
            </div>
        </div>
    </div>
  )
}

export default Agents