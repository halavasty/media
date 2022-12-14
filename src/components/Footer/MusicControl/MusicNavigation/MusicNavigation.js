import "./MusicNavigation.scss";
import { MixButton } from "./MixButton";
import { RepeatButton } from './RepeatButton'
import { PlayControl } from "./PlayControl";
import { TrackRewind } from "./TrackRewind";
import { useState } from "react";

export const MusicNavigation = (props) => {
    
  const MusicData = (MusicInfo) => {
    
    const audio = document.querySelector('#audio');
    if(MusicInfo === "Play") {
      audio.play();
    }

    if(MusicInfo === "Stop-play") {
      audio.pause();
    }
  };

  const [timeUpdate, setTimeUpdate] = useState('3.44')

    const changeTime = (e) => {
        setTimeUpdate((e.target.currentTime));
    }

    return (
      <div className="MusicNavigation">
        <div className="MusicNavigation-buttons">
        <MixButton />
        <PlayControl MusicData={MusicData} />
        <RepeatButton />
        </div>
        <div className="MusicNavigation-rewind">
        <TrackRewind timeUpdate={timeUpdate} />
        </div>
        
        <audio id="audio" onTimeUpdate={changeTime}>
        <source src={props.src} type={props.type}></source>
        
        </audio>
      </div>
  );
};
