import "./TrackRewind.css";
import { TrackCurrentTime } from "./TrackCurrentTime";
import { TrackDurationTime} from "./TrackDurationTime"



export const TrackRewind = ({timeUpdate, timeduration, rewindData}) => {
  
  const progressValue = (timeUpdate / timeduration ) * 100
    
    const Rewind = (e) => {
      const userClickPostion = (e.nativeEvent.offsetX * 80) / (timeduration ) 
      rewindData(userClickPostion);
    }
 
    return (
      <div className="TrackRewind-container">
        <TrackCurrentTime timeUpdate={timeUpdate} />
        <input className="TrackRewind" type="range" min="0" max="100" name="range" value={progressValue} step="0.5" onClick={Rewind}>
        </input>
        <TrackDurationTime timeduration={timeduration} />
      
      </div>
  );
};