import React from 'react';
import './UserInput.css';

const UserInput = ( props ) => {
  return (
  <div className='Input'>
    <form>
    <input type='text' onChange={props.changed} value={props.username} />
    </form>
  </div>
  );
}


export default UserInput;
