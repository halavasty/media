import "./PlayControl.css";
import { LeftControlButton } from "./LeftControlButton";
import { RightControlButton } from "./RightControlButton";
import { PlayButton } from "./PlayButton";

export const PlayControl = (...props) => {
    
    return (
      <div className="PlayControl">
        <LeftControlButton />
        <PlayButton />
        <RightControlButton />
      </div>
  );
};