import "./TrackInfoImage.scss";
import DefaultImage from "./images/DefaultCover.png"

 export const TrackInfoImage = (props) => {

    return (
    
      <div className="TrackInfoImage">
        <img alt="TrackInfoImage" className="TrackInfoImage" src={props.image || DefaultImage}></img>
      </div>

  );
};