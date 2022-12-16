import "./TrackRewind.css";
import { TrackCurrentTime } from "./TrackCurrentTime";
import { TrackDurationTime} from "./TrackDurationTime"



export const TrackRewind = ({timeUpdate, timeduration, userDuration}) => {
  

const rewindTrack = function(e) {
  const value = 123;
  userDuration(value);
  console.log(e.target.value)
}

    return (
      <div className="TrackRewind-container">
        <TrackCurrentTime timeUpdate={timeUpdate} />
        <input className="TrackRewind" type="range" min="0" max={timeduration} name="range" value={timeUpdate} step="1" onClick={rewindTrack}>
        </input>
        <TrackDurationTime timeduration={timeduration} />
      
      </div>
  );
};