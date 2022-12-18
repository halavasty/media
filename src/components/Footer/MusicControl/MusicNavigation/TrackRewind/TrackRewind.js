import "./TrackRewind.css";
import { TrackCurrentTime } from "./TrackCurrentTime";
import { TrackDurationTime} from "./TrackDurationTime"



export const TrackRewind = ({timeUpdate, timeduration, rewindData}) => {
  
  
    const Rewind = () => {
      rewindData(123);
    }
 
    return (
      <div className="TrackRewind-container">
        <TrackCurrentTime timeUpdate={timeUpdate} />
        <input className="TrackRewind" type="range" min="0" max={timeduration} name="range" value={timeUpdate} step="1" onClick={Rewind}>
        </input>
        <TrackDurationTime timeduration={timeduration} />
      
      </div>
  );
};