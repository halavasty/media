import "./TrackInfoImage.scss";
import DefaultImage from "./images/DefaultCover.jpg"

export const TrackInfoImage = ({ image = DefaultImage }) => {

    return (
    
      <div className="TrackInfoImage">
        <img alt="TrackInfoImage" className="TrackInfoImage" src={image}></img>
      </div>

  );
};