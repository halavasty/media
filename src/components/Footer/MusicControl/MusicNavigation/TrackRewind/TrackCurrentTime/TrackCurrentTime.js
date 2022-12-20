import "./TrackCurrentTime.css";

export const TrackCurrentTime = ({timeUpdate}) => {

  const convertCurrentTime = (time) => {
    
    if(time >= 60) {
    const minutes = Math.floor(time / 60 )
    
    const seconds = time % 60;

      if(seconds <= 10) {
        return `${minutes}:0${seconds.toFixed(0)}`;
      } else {
        return `${minutes}:${seconds.toFixed(0)}`;
      }
    
  } else {
    if(time < 10) {
      return `0:0${parseInt(time)}`
    } else {
      return `0:${parseInt(time)}`
    }
  }
}    
  
    return (
      <div className="TrackCurrentTime">
        {convertCurrentTime(timeUpdate)}
      </div>
  );
};