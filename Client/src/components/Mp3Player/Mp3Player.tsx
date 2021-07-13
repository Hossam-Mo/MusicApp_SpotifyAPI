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

  useEffect(() => {
    console.log(url);

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

      /* progressBar?.current?.value  */

      url.play();
    }
  };
  const pause = () => {
    url?.pause();
    console.log(url.currentTime);
  };

  useEffect(() => {
    if (url) console.log(url.currentTime);
  }, [url?.currentTime]);
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
        onChange={(e) => {
          setProgress(parseInt(e.target.value));
        }}
      ></input>
    </div>
  );
}
