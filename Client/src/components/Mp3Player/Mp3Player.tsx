import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";

import "./mp3Player.css";

export default function Mp3Player() {
  const url = useSelector((state: any) => state.url);
  const [prAudio, setPrAudio] = useState<HTMLAudioElement>();

  useEffect(() => {
    console.log(url);
    if (prAudio) {
      prAudio.pause();
      prAudio.load();
    }
    if (url) play();
  }, [url]);

  const play = () => {
    if (url) {
      setPrAudio(url);
      url.play();
    }
  };
  const pause = () => {
    url?.pause();
  };

  return (
    <div className="mp3Player">
      <button onClick={play}>play</button>
      <button onClick={pause}>Pause</button>
    </div>
  );
}
