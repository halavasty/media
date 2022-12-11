import "./MusicControl.scss";
import { MusicButtons } from "./MusicButtons";

export const MusicControl = (props) => {
    
  return (
      <div className="MusicControl">
        <MusicButtons src={props.src} />
      </div>
  );
};
