import "./YourLibraryBtn.scss";
import { ReactComponent as YLB } from './YLB.svg';
import React, { useState } from 'react';

export const YourLibraryBtn = () => {

  const [isActive, setIsActive] = useState(true);
  function clickFunc() {
    setIsActive(!isActive);
    console.log("Your Library");
  }
  
  return (
    <div
      className={`List-Btn ${isActive ? "btn-Active" : "btn-unActive"}`}
      onClick={clickFunc}
    >
      <YLB className="YLBLogo" />
      <p className="YourLibraryBtn-Text listText">Your Library</p>
    </div>
  );
};


