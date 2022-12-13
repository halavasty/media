import "./MusicNavigation.scss";
import { MixButton } from "./MixButton";
import { RepeatButton } from './RepeatButton'
import { PlayControl } from "./PlayControl";
import { TrackRewind } from "./TrackRewind";

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

    return (
      <div className="MusicNavigation">
        <div className="MusicNavigation-buttons">
        <MixButton />
        <PlayControl MusicData={MusicData} />
        <RepeatButton />
        </div>
        <div className="MusicNavigation-rewind">
        <TrackRewind />
        </div>
        
        <audio id="audio">
        <source src={props.src} type={props.type}></source>
        </audio>
      </div>
  );
};
