
export const Audio = ({changeDuration, changeTime, type, isPlaying, src}) => {
  
    const audio = document.querySelector("#audio")
    
    if(isPlaying === "Audio-Stop") {
        audio.pause();
        }
    
    if(isPlaying === "Audio-Play") {
        audio.play();
    }



    return (
        <audio id="audio" onTimeUpdateCapture={changeTime} onTimeUpdate={changeDuration}>
        <source src={src} type={type}></source>
        
        </audio>
  );
};