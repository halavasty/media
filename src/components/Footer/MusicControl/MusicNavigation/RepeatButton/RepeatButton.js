import "./RepeatButton.css";
import { RepeatButtonIcon } from "./RepeatButtonIcon";
import { useState } from "react";

export const RepeatButton = () => {
  
    const [isActive, setActive] = useState(false);

    const toggleActive = () => {
        setActive(!isActive);
        if (!isActive) {
            console.log("Repeat-activated");
          } else {
            console.log("Repeat-disactivated");
          }
    }
    
    return (
      <button className={isActive ? 'RepeatButton active' : 'RepeatButton'} onClick={toggleActive}>
        <RepeatButtonIcon />
      </button>
  );
};