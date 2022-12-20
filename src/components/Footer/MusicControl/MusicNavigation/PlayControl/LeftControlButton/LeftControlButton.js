import "./LeftControlButton.css";
import { LeftControlButtonIcon } from "./LeftControlButtonIcon";

export const LeftControlButton = () => {
  
    const toggleTrackPrev = () => {
        console.log("Prev-track");
    }
    
    return (
      <button className="LeftControlButton" onClick={toggleTrackPrev}>
        <LeftControlButtonIcon />
      </button>
  );
};