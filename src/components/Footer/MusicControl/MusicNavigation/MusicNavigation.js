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

  // Audio
  const [timeUpdate, setTimeUpdate] = useState('0')

    const changeTime = (e) => {
        setTimeUpdate((e.target.currentTime));
    }
    
    const [timeDuration, setTimeDuration] = useState('0')

    const changeDuration = (e) => {
        setTimeDuration((e.target.duration))
    }

    //RewindTrack

    const userDuration = (rewind) => {
      const audio = document.querySelector('#audio');
      if(rewind) {
        audio.currentTime = rewind;
      }
    };

    return (
      <div className="MusicNavigation">
        <div className="MusicNavigation-buttons">
        <MixButton />
        <PlayControl MusicData={MusicData} />
        <RepeatButton />
        </div>
        <div className="MusicNavigation-rewind">
        <TrackRewind timeUpdate={timeUpdate} timeduration={timeDuration} userDuration={userDuration} />
        </div>
        
        <audio id="audio" onTimeUpdateCapture={changeTime} onTimeUpdate={changeDuration}>
        <source src={props.src} type={props.type}></source>
        
        </audio>
      </div>
  );
};
