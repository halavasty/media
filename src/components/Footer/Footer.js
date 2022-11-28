import "./Footer.scss";
import { TrackInfo } from "./TrackInfo";

export const Footer = (props) => {
    
    return (
    <footer className="Footer">
      <div className="Footer__inner">
           <TrackInfo {...props} />
           <div {...props} className="Element2">Element2</div>
           <div {...props} className="Element3">Element3</div>
      </div>
    </footer>
  );
};