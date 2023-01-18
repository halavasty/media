import "./MusicControl.scss";
import { MusicNavigation } from "./MusicNavigation";

export const MusicControl = (trackData) => {
    
  return (
      <div className="MusicControl">
        <MusicNavigation src={trackData.src} type={trackData.type} />
      </div>
  );
};
