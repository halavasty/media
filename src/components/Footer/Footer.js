import "./Footer.scss";
import { MusicControl } from "./MusicControl";
import { TrackInfo } from "./TrackInfo";
import Summer from "./TrackInfo/Summer.png"
import TestTrack from "../../helpers/assets/TestMusic/TestTrack.mp3"

export const Footer = (props) => {
  
  const likeData = (likeInfo) => {
    console.log(likeInfo);
  };

  const src = TestTrack;
  const type = "audio/mp3"

    return (
    <footer className="Footer">
      <div className="Footer__inner">
           <TrackInfo image={Summer} text={"Test Track"} name={"Medea"} likeData={likeData} />
           <MusicControl src={src} type={type} />
           <div {...props} className="Element3">Element3</div>
      </div>
    </footer>
  );
};
