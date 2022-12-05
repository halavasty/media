import "./MusicButtonTopbar.scss";
import { MixButton } from "./MixButton";

export const MusicButtonTopbar = (props) => {
  
  const MixData = (mixInfo) => {
    console.log(mixInfo);
  };
  
    return (
      <div className="MusicButtonTopBar">
        <MixButton MixData={MixData} />
      </div>
  );
};
