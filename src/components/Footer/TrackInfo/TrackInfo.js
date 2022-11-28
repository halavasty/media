import "./TrackInfo.scss";
import { TrackInfoImage } from "./TrackInfoImage";
import Summer from './Summer.png'
import { TrackInfoText } from "./TrackInfoText";
import { TrackInfoLike } from "./TrackInfoLike";

export const TrackInfo = (...props) => {
    
    return (
    
      <div className="TrackInfo">
          <TrackInfoImage image={Summer} />
          <TrackInfoText text={"Тест Текст"} name={"Тест Имя"} />
          <TrackInfoLike />
          
      </div>

  );
};