import "./MixButton.css";
import { MixButtonIcon } from "./MixButtonIcon"
import { useState } from "react";

export const MixButton = () => {
  
    const [isActive, setActive] = useState(false);

    const toggleActive = () => {
        setActive(!isActive);
        if (!isActive) {
            console.log("Mix-activated");
          } else {
            console.log("Mix-disactivated");
          }
    }
    
    return (
      <button className={isActive ? 'MixButton active' : 'MixButton'} onClick={toggleActive}>
        <MixButtonIcon />
      </button>
  );
};