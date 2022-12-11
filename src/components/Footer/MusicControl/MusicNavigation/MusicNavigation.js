import "./MusicNavigation.scss";
import { MixButton } from "./MixButton";
import { RepeatButton } from './RepeatButton'
import { PlayControl } from "./PlayControl";

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
        <MixButton />
        <PlayControl MusicData={MusicData} />
        <RepeatButton />
        
        <audio id="audio">
        <source src={props.src} type="audio/mp3"></source>
        </audio>
      </div>
  );
};
