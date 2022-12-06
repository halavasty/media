import "./MusicButtonTopbar.scss";
import { MixButton } from "./MixButton";
import { RepeatButton } from './RepeatButton'
import { PlayControl } from "./PlayControl";

export const MusicButtonTopbar = (...props) => {
    
    return (
      <div className="MusicButtonTopBar">
        <MixButton />
        <PlayControl />
        <RepeatButton />
      </div>
  );
};
