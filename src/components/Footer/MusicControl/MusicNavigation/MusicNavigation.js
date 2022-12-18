import "./MusicNavigation.scss";
import { MixButton } from "./MixButton";
import { RepeatButton } from './RepeatButton'
import { PlayControl } from "./PlayControl";
import { TrackRewind } from "./TrackRewind";
import { Audio } from "./Audio";
import { useState } from "react";

export const MusicNavigation = (trackData) => {
    


 const [isPlaying, setPlaying] = useState("Stop-play");

 const MusicData = (MusicInfo) => {
  if(MusicInfo === "Stop-play") {
    setPlaying("Audio-Stop");
  }
  if (MusicInfo === "Play") {
    setPlaying("Audio-Play");
  }
};

  // Audio
  const [timeUpdate, setTimeUpdate] = useState('0')
  const [timeDuration, setTimeDuration] = useState('0')
    
    const changeTime = (e) => {
        setTimeUpdate((e.target.currentTime));
    }
    
    const changeDuration = (e) => {
        setTimeDuration((e.target.duration))
    }


    return (
      <div className="MusicNavigation">
        <div className="MusicNavigation-buttons">
        <MixButton />
        <PlayControl MusicData={MusicData} />
        <RepeatButton />
        </div>
        <div className="MusicNavigation-rewind">
        <TrackRewind timeUpdate={timeUpdate} timeduration={timeDuration} />
        </div>
        <Audio src={trackData.src} type={trackData.type} changeDuration={changeDuration} changeTime={changeTime} isPlaying={isPlaying} />
      </div>
  );
};
