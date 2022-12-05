import "./MixButton.css";
import { MixButtonIcon } from "./MixButtonIcon"
import { useState } from "react";

export const MixButton = ({MixData}) => {
  
    const [isActive, setActive] = useState(false);

    const toggleActive = () => {
        setActive(!isActive);
        if (!isActive) {
            MixData("Mix-activated");
          } else {
            MixData("Mix-disactivated");
          }
    }
    
    return (
      <button className={isActive ? 'MixButton active' : 'MixButton'} onClick={toggleActive}>
        <MixButtonIcon />
      </button>
  );
};