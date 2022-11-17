import "./YourLibraryBtn.scss";
import { ReactComponent as YLB } from './YLB.svg';

export const YourLibraryBtn = () => {

  function clickFunc(e){
    e.target.className = 'ListBtn btn_Active';
    // e.target.className = ' btn_unActive';
    console.log("Your Library");
  }

  return (
    <div className="ListBtn btn_unActive" onClick={clickFunc}>
       <YLB className="YLBLogo"/>
       <p className="YourLibraryBtn_Text listText">Your Library</p>
    </div>
  );
};
