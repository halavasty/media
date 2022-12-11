import "./Footer.scss";
import { MusicControl } from "./MusicControl";
import { TrackInfo } from "./TrackInfo";
import Summer from "./TrackInfo/Summer.png"

export const Footer = (props) => {
  
  const likeData = (likeInfo) => {
    console.log(likeInfo);
  };

  const MusicSrc = "https://mp3minusovki.com/music/fhvndfjwserjgt/247bab1c312b2335afe3f5c9b496a3d3/854262e8b9de720784c0a4491e49912f.mp3";

    return (
    <footer className="Footer">
      <div className="Footer__inner">
           <TrackInfo image={Summer} text={"Test Track"} name={"Medea"} likeData={likeData} />
           <MusicControl src={MusicSrc} />
           <div {...props} className="Element3">Element3</div>
      </div>
    </footer>
  );
};
