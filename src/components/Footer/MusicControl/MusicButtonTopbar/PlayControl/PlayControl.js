import "./PlayControl.css";
import { LeftControlButton } from "./LeftControlButton";
import { RightControlButton } from "./RightControlButton";

export const PlayControl = (...props) => {
    
    return (
      <div className="PlayControl">
        <LeftControlButton />
        <RightControlButton />
      </div>
  );
};