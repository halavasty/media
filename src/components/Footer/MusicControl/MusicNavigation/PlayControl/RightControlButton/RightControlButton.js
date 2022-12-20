import "./RightControlButton.css";
import { RightControlButtonIcon } from "./RightControlButtonIcon";

export const RightControlButton = () => {
  
    const toggleTrackNext = () => {
        console.log("Next-track");
    }
    
    return (
      <button className="LeftControlButton" onClick={toggleTrackNext}>
        <RightControlButtonIcon />
      </button>
  );
};