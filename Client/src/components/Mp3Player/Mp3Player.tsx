import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import "./mp3Player.css";

export default function Mp3Player() {
  const url = useSelector((state: any) => state.url);
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement>();
  const trackPlayer = useRef<HTMLAudioElement>(null);
  const play = () => {
    if (url) {
      if (currentAudio) {
        currentAudio.pause();
      }
      let audio = new Audio(url);
      setCurrentAudio(audio);
      currentAudio?.play();
    }
  };
  const pause = () => {
    console.log(currentAudio);
    currentAudio?.pause();
  };
  useEffect(() => {
    console.log(url);
    if (url) {
      play();
    }
  }, [url]);
  return (
    <div className="mp3Player">
      {url && (
        <audio ref={trackPlayer}>
          <source src={`${url}`}></source>
        </audio>
      )}

      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
    </div>
  );
}
