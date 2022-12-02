import "./TrackInfoLike.css";
import { LikeIcon } from "./TrackInfoLikeIcon";
import { useState } from "react";

export const TrackInfoLike = ({likeData}) => {
  const [isActive, setActive] = useState(false);

  const likeActive = () => {
    setActive(!isActive);
    if (!isActive) {
      likeData("Liked");
    } else {
      likeData("Disliked");
    }
  };

  return (
    <button
      className={isActive ? "TrackInfoLike active" : "TrackInfoLike"}
      onClick={likeActive}
    >
      <LikeIcon />
    </button>
  );
};
