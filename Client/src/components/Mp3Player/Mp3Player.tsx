import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import LinearProgress from "@material-ui/core/LinearProgress";

import "./mp3Player.css";
import axios from "axios";
import { createNoSubstitutionTemplateLiteral } from "typescript";

export default function Mp3Player() {
  const url = useSelector((state: any) => state.url);
  const [prAudio, setPrAudio] = useState<HTMLAudioElement>();
  const [audioDur, setAudioDur] = useState<string>();

  useEffect(() => {
    console.log(url);
    console.log(url.currentTime);

    var minutes = Math.floor(url.currentTime / 60);
    var seconds = url.currentTime - minutes * 60;

    let a = `${minutes}:${seconds.toFixed(0)}`;
    if (url)
      axios
        .post("http://localhost:5000/audioDuraction", { url: url.src })
        .then((res) => {
          console.log(res);
          setAudioDur(res.data);
          if (prAudio) {
            prAudio.pause();
            prAudio.load();
          }
          play();
        })
        .catch((err) => {
          console.log(err);
        });
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
      <LinearProgress variant="determinate" value={50}></LinearProgress>
    </div>
  );
}
