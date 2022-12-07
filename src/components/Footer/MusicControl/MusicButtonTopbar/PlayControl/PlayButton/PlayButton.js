import "./PlayButton.css";
import { PlayButtonIcon } from "./PlayButtonIcon";
import { useState } from "react";

export const PlayButton = () => {
  
    const [isActive, setActive] = useState(false);

    const toggleActive = () => {
        setActive(!isActive);
        if (!isActive) {
            console.log("Play");
          } else {
            console.log("Stop-play");
          }
    }
    
    return (
      <button className={isActive ? 'PlayButton active' : 'PlayButton'} onClick={toggleActive}>
        <PlayButtonIcon />
      </button>
  );
};