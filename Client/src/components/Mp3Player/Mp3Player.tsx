import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import "./mp3Player.css";

export default function Mp3Player() {
  const url = useSelector((state: any) => state.url);
  const [prAudio, setPrAudio] = useState<HTMLAudioElement>();
  const [audioDur, setAudioDur] = useState<string>();
  const [progress, setProgress] = useState<number>(0);
  const progressBar = useRef<HTMLInputElement>(null);
  const intervalRef = useRef<NodeJS.Timer>();

  const playingAsong = () => {
    if (url) {
      cleanUp();
      intervalRef.current = setInterval(() => {
        if (url.ended) {
          console.log("it did end");
          cleanUp();
        } else {
          console.log("s");
          setProgress(url.currentTime);
        }
      }, 1000);
    }
  };
  const progressChange = (value) => {
    if (url) {
      url.currentTime = value;
      setProgress(url.currentTime);
    }
  };

  const getTime = (sec) => {
    var minutes = Math.floor(sec / 60);
    var seconds = sec - minutes * 60;
    return `${minutes}:${seconds.toFixed(0)}`;
  };

  useEffect(() => {
    if (url) {
      console.log("this is ", url);

      const { duration } = url;
      setAudioDur(duration);

      play();
    }
    if (prAudio) {
      prAudio.pause();
      prAudio.load();
    }
  }, [url]);

  const play = () => {
    if (url) {
      setPrAudio(url);
      playingAsong();
      url.play();
    }
  };
  const pause = () => {
    url?.pause();
  };

  const cleanUp = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    } else console.log("its not ex");
  };

  return (
    <div className="mp3Player">
      <button onClick={play}>play</button>
      <button onClick={pause}>Pause</button>
      {/*   <LinearProgress variant="determinate" value={50}></LinearProgress> */}
      <input
        ref={progressBar}
        type="range"
        value={progress}
        min="0"
        step="1"
        max={audioDur ? audioDur : `${audioDur}`}
        onChange={(e) => {
          progressChange(e.target.value);
        }}
      ></input>
    </div>
  );
}
