import "./Footer.scss";
import { TrackInfo } from "./TrackInfo";
import Summer from "./TrackInfo/Summer.png"

export const Footer = (props) => {
  
  const likeData = (likeInfo) => {
    console.log(likeInfo);
  };

    return (
    <footer className="Footer">
      <div className="Footer__inner">
           <TrackInfo image={Summer} text={"Test Track"} name={"Melisa"} func={likeData} />
           <div {...props} className="Element2">Element2</div>
           <div {...props} className="Element3">Element3</div>
      </div>
    </footer>
  );
};
