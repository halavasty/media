import "./MusicControl.scss";
import { MusicNavigation } from "./MusicNavigation";

export const MusicControl = (props) => {
    
  return (
      <div className="MusicControl">
        <MusicNavigation src={props.src} type={props.type} />
      </div>
  );
};
