import "./TrackInfoText.css";

 export const TrackInfoText = (props) => {

    return (
    
      <div className="TrackInfoText-inner">
        <h2 className="TrackInfoText-text"> {props.text || "In My Fillings"}</h2>
        <h3 className="TrackInfoText-name"> {props.name || "Drake"}</h3>
      </div>

  );
};