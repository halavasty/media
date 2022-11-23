import React from 'react'
import {useState} from 'react';
import "./Arrows.css"

export function Arrows() {
  
  const [isDisabled, setIsDisabled] = useState(false);
  
  const handleClick = function(event) {
    setIsDisabled(event.currentTarget.classList.toggle('Disable'));
  };
  



  return (
    <div className='Arrows-Inner'>
      <button className="Arrow-Left" onClick={handleClick} >{isDisabled}</button>
      <button className="Arrow-Right" onClick={handleClick}>{isDisabled}</button>
    </div>
  );
}

