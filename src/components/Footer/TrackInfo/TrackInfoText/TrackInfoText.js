import "./TrackInfoText.css";

 export const TrackInfoText = ({text = "Test text", name = "Name"}) => {

    return (
    
      <div className="TrackInfoText-inner">
        <h2 className="TrackInfoText-text"> {text}</h2>
        <h3 className="TrackInfoText-name"> {name}</h3>
      </div>

  );
};