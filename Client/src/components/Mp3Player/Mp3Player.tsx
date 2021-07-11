import { useRef } from "react";
import "./mp3Player.css";

export default function Mp3Player() {
  const trackPlayer = useRef<HTMLAudioElement>(null);
  const play = () => {
    trackPlayer.current?.play();
  };
  const pause = () => {
    trackPlayer.current?.pause();
  };
  return (
    <div className="mp3Player">
      <audio ref={trackPlayer}>
        <source src="https://p.scdn.co/mp3-preview/e9b2bcbd7ccad88cc999ff22778e721d63c40164?cid=4451beba5b2c42a4a9dbb72c109d2de5"></source>
      </audio>
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
    </div>
  );
}
