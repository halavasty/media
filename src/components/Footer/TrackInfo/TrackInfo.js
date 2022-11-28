import "./TrackInfo.scss";
import { TrackInfoImage } from "./TrackInfoImage";
import Summer from './Summer.png'

export const TrackInfo = (...props) => {
    
    return (
    
      <div className="TrackInfo">
          <TrackInfoImage image={Summer} />
          <div {...props} className="Element1">Element1</div>
      </div>

  );
};