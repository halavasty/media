import "./TrackInfoLike.css";
import { LikeIcon } from "./TrackInfoLikeIcon";
import { useState } from "react";

export const TrackInfoLike = (props) => {
  const [isActive, setActive] = useState(false);

  const likeActive = () => {
    setActive(!isActive);
    if (!isActive) {
      props.func("Liked");
    } else {
      props.func("Disliked");
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
