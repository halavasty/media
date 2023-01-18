import "./PlayControl.css";
import { LeftControlButton } from "./LeftControlButton";
import { RightControlButton } from "./RightControlButton";
import { PlayButton } from "./PlayButton";

export const PlayControl = (props) => {
  
  const MusicData = (MusicInfo) => {
    props.MusicData(MusicInfo);
  };


    return (
      <div className="PlayControl">
        <LeftControlButton />
        <PlayButton MusicData={MusicData} />
        <RightControlButton />
      </div>
  );
};