import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import LinearProgress from "@material-ui/core/LinearProgress";
import "./mp3Player.css";
import axios from "axios";

export default function Mp3Player() {
  const url = useSelector((state: any) => state.url);
  const [prAudio, setPrAudio] = useState<HTMLAudioElement>();
  const [audioDur, setAudioDur] = useState<string>();
  const [progress, setProgress] = useState<number>(0);
  const progressBar = useRef<HTMLInputElement>(null);
  const intervalRef = useRef<NodeJS.Timer>();

  const getTime = (sec) => {
    var minutes = Math.floor(sec / 60);
    var seconds = sec - minutes * 60;
    return `${minutes}:${seconds.toFixed(0)}`;
  };

  useEffect(() => {
    if (url) {
      cleanUp();
      console.log(url);
      const { duration } = url;
      console.log(duration);
      setAudioDur(duration);

      if (prAudio) {
        cleanUp();
        prAudio.pause();
        prAudio.load();
      }
      play();
      playingAsong();
    }
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

  const onScrub = (value) => {
    console.log(value);

    if (url) {
      url.currentTime = value;
      setProgress(url.currentTime);
    }
  };

  const playingAsong = () => {
    if (url) {
      intervalRef.current = setInterval(() => {
        if (url.ended) {
          console.log("it did end");
          cleanUp();
        } else {
          setProgress(url.currentTime);
        }
      }, 500);
    }
  };
  const cleanUp = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
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
          onScrub(e.target.value);
        }}
      ></input>
    </div>
  );
}
