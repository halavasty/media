import "./TrackRewind.css";

export const TrackRewind = (props) => {
  

    return (
      <input className="TrackRewind" type="range" min="0" max="300" name="range" value='200' step="1"></input>
  );
};