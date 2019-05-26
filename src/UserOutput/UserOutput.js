import React from 'react';
import './UserOutput.css';


const UserOutput = ( props ) => {
  return (
  <div className='UserOutput'>
  <p onClick={props.click}>
    My name is  {props.username}.</p>
    <p>I am going to be a web developer.</p>
  </div>
  )
};


export default UserOutput;
