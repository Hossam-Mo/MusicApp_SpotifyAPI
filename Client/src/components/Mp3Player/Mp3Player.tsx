import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import "./mp3Player.css";
import Slider from "@material-ui/core/Slider";
import { getMp3Action } from "../../redux/reducers";
import { BsVolumeUp } from "react-icons/bs";
import { IoPlaySharp, IoPause } from "react-icons/io5";
export default function Mp3Player() {
  const song = useSelector((state: getMp3Action) => state.song);
  const [prAudio, setPrAudio] = useState<HTMLAudioElement>();
  const [audioDur, setAudioDur] = useState<any>();
  const [progress, setProgress] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timer>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);

  const playingAsong = () => {
    if (song?.audio) {
      cleanUp();
      intervalRef.current = setInterval(() => {
        if (song?.audio.ended) {
          song.audio.load();
          setIsPlaying(false);
          setProgress(0);
          cleanUp();
        } else {
          console.log("s");
          setProgress(song?.audio.currentTime);
        }
      }, 40);
    }
  };
  const progressChange = (value) => {
    console.log(value);
    if (song?.audio) {
      song.audio.currentTime = value;
      setProgress(song?.audio.currentTime);
    }
  };

  const volumeChange = (value) => {
    if (song?.audio) {
      song.audio.volume = value / 100;
      setVolume(value);
    }
  };

  const getTime = (sec) => {
    var minutes = Math.floor(sec / 60);
    var seconds = sec - minutes * 60;
    return `${minutes}:${seconds.toFixed(0)}`;
  };
  const play = () => {
    if (song?.audio) {
      song?.audio
        .play()
        .then(() => {
          console.log("dsads");
          setIsPlaying(true);

          setPrAudio(song?.audio);
          playingAsong();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const pause = () => {
    song?.audio.pause();
    setIsPlaying(false);
  };

  const cleanUp = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };
  useEffect(() => {
    if (song?.audio) {
      const { duration } = song?.audio;
      setAudioDur(duration);
      play();
      song.audio.volume = volume / 100;
    }
  }, [song?.audio]);

  useEffect(() => {
    if (prAudio) {
      if (prAudio != song?.audio) {
        console.log(prAudio.paused);
        console.log(prAudio);
        prAudio.pause();
        prAudio.load();
      }
    }
  }, [song?.audio, prAudio]);

  return (
    <div className={song ? "mp3Player" : `mp3Player ${"mp3Player_op"}`}>
      <div className="mp3Player_start">
        <img
          src={song?.imageUrl || "/asset/defulatimage.png"}
          alt={song?.name}
        ></img>
        <div>
          <h3>{song?.name}</h3>
          <p>{song?.artist}</p>
        </div>
      </div>
      <div className="mp3Player_mid">
        {isPlaying ? (
          <button onClick={pause}>
            <IoPause style={{ marginLeft: 0 }}></IoPause>
          </button>
        ) : (
          <button onClick={play}>
            <IoPlaySharp />
          </button>
        )}

        <Slider
          max={audioDur ? audioDur : `${audioDur}`}
          min={0}
          value={progress}
          onChange={(e, v) => {
            console.log("v:", v);
            let value: any = 0;
            if (v || progress) value = v || progress;
            console.log("value:", value);
            if (value) progressChange(value);
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
      <div className="mp3Player_end">
        <BsVolumeUp></BsVolumeUp>
        <Slider
          value={volume}
          min={0}
          max={100}
          onChange={(e, v) => {
            volumeChange(v);
          }}
          aria-labelledby="continuous-slider"
        ></Slider>
      </div>
    </div>
  );
}
