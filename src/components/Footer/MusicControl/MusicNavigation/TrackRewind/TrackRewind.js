import "./TrackRewind.css";
import { TrackTime } from "./TrackTime";
import { useState } from "react";

export const TrackRewind = (props) => {
  
  const [musicTime, setMusicTime] = useState('3:24')

    const changeMusicTime = (e) => {
        setMusicTime(e.target.value);
    }

    return (
      <div className="TrackRewind-container">
        <TrackTime musicTime={musicTime} />
        <input className="TrackRewind" type="range" min="0" max="300" name="range" value='200' step="1" onChange={changeMusicTime}>
        </input>
        <TrackTime musicTime={musicTime} />
      </div>
  );
};