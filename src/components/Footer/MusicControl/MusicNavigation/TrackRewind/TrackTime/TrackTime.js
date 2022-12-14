import "./TrackTime.css";

export const TrackTime = ({musicTime}) => {

    const convertTime = (time) => {
        if(time > 60) {
            return (1 + ":" + parseInt(time));
        }
        else {
            return parseInt(time);
        }
    }

    return (
      <div className="TrackTime">
        {convertTime(musicTime)}
      </div>
  );
};