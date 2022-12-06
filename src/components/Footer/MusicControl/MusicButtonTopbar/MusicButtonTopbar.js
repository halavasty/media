import "./MusicButtonTopbar.scss";
import { MixButton } from "./MixButton";
import { RepeatButton } from './RepeatButton'

export const MusicButtonTopbar = (...props) => {
    
    return (
      <div className="MusicButtonTopBar">
        <MixButton />
        <RepeatButton />
      </div>
  );
};
