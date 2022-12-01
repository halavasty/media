import "./TrackInfo.scss";
import { TrackInfoImage } from "./TrackInfoImage";
import { TrackInfoText } from "./TrackInfoText";
import { TrackInfoLike } from "./TrackInfoLike";

export const TrackInfo = (props) => {
  const likeData = (likeInfo) => {
    props.likeData(likeInfo);
  };

  return (
    <div className="TrackInfo">
      <TrackInfoImage image={props.image} />
      <TrackInfoText text={props.text} name={props.name} />
      <TrackInfoLike likeData={likeData} />
    </div>
  );
};
