import "./TrackDurationTime.css";

export const TrackDurationTime = ({timeduration}) => {

  const convertDurationTime = (time) => {
    const minutes = Math.floor(time / 60 )
    
    const seconds = time % 60;
    
    return `${minutes}:${seconds.toFixed(0)}`;
}    

    return (
      <div className="TrackDurationTime">
        {convertDurationTime(timeduration)}
      </div>
  );
};