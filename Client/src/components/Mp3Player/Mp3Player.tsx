import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import "./mp3Player.css";
import { LinearProgress } from "@material-ui/core";
import Slider from "@material-ui/core/Slider";
export default function Mp3Player() {
  const url = useSelector((state: any) => state.url);
  const [prAudio, setPrAudio] = useState<HTMLAudioElement>();
  const [audioDur, setAudioDur] = useState<any>();
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
      setProgress(0);
      setPrAudio(url);
      playingAsong();
      url.play();
    }
  };
  const pause = () => {
    url?.pause();
  };

  const cleanUp = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  return (
    <div className="mp3Player">
      <button onClick={play}>play</button>
      <button onClick={pause}>Pause</button>
      <Slider
        max={audioDur ? audioDur : `${audioDur}`}
        min={0}
        value={progress}
        onChange={(e, v) => {
          console.log(v);
          progressChange(v);
        }}
        aria-labelledby="continuous-slider"
      />

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
