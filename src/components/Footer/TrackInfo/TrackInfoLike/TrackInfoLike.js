import "./TrackInfoLike.css";
import { LikeIcon } from './TrackInfoLikeIcon'
import { useState } from "react";

 export const TrackInfoLike = (props) => {

    const [isActive, setActive] = useState(false);

    const toggleActive = () => {
        setActive(!isActive);
    }

    return (
    
      <button className={isActive ? 'TrackInfoLike active' : 'TrackInfoLike'} onClick={toggleActive}>
        <LikeIcon />
      </button>

  );
};