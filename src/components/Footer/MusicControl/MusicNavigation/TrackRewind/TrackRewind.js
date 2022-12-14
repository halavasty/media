import "./TrackRewind.css";
import { TrackTime } from "./TrackTime";


export const TrackRewind = ({timeUpdate}) => {
  
  
    return (
      <div className="TrackRewind-container">
        <TrackTime musicTime={timeUpdate} />
        <input className="TrackRewind" type="range" min="0" max="300" name="range" value={timeUpdate} step="1">
        </input>
      
      </div>
  );
};