import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import "./mp3Player.css";
import Slider from "@material-ui/core/Slider";
import { getMp3Action } from "../../redux/reducers";
import { parseJsonSourceFileConfigFileContent } from "typescript";

export default function Mp3Player() {
  const song = useSelector((state: getMp3Action) => state.song);
  const [prAudio, setPrAudio] = useState<HTMLAudioElement>();
  const [audioDur, setAudioDur] = useState<any>();
  const [progress, setProgress] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timer>();

  const playingAsong = () => {
    if (song?.audio) {
      cleanUp();
      intervalRef.current = setInterval(() => {
        if (song?.audio.ended) {
          console.log("it did end");
          song.audio.load();
          cleanUp();
        } else {
          console.log("s");
          setProgress(song?.audio.currentTime);
        }
      }, 40);
    }
  };
  const progressChange = (value) => {
    if (song?.audio) {
      song.audio.currentTime = value;
      setProgress(song?.audio.currentTime);
    }
  };

  const getTime = (sec) => {
    var minutes = Math.floor(sec / 60);
    var seconds = sec - minutes * 60;
    return `${minutes}:${seconds.toFixed(0)}`;
  };

  useEffect(() => {
    if (song?.audio) {
      const { duration } = song?.audio;
      setAudioDur(duration);
      play();
    }
    if (prAudio) {
      prAudio.pause();
      prAudio.load();
    }
  }, [song?.audio]);

  const play = () => {
    if (song?.audio) {
      setProgress(0);
      setPrAudio(song?.audio);
      playingAsong();
      song?.audio.play();
    }
  };
  const pause = () => {
    song?.audio.pause();
  };

  const cleanUp = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    console.log(song);
  }, [song]);

  return (
    <div className="mp3Player">
      <div className="mp3Player_start">
        <img src={song?.imageUrl} alt={song?.name}></img>
        <div>
          <h3>{song?.name}</h3>
          <p>{song?.artist}</p>
        </div>
      </div>
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

      {/* <input
        ref={progressBar}
        type="range"
        value={progress}
        min="0"
        step="1"
        max={audioDur ? audioDur : `${audioDur}`}
        onChange={(e) => {
          progressChange(e.target.value);
        }}
      ></input> */}
    </div>
  );
}
