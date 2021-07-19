import "./secTrack.css";
import tracks from "../../../../types/tracks";
import { useParams } from "react-router-dom";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { IoPlaySharp } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { get_mp3Url } from "../../../../redux/actionTypes";
import { useState } from "react";

interface prames {
  type: string;
  id: string;
}

export default function SecTrack({
  name,
  duration_ms,
  id,
  album,
  number,
  preview_url,
}: tracks) {
  const prames = useParams<prames>();
  const dispatch = useDispatch();
  const [audio] = useState(new Audio(preview_url));

  const play = () => {
    console.log(preview_url);

    dispatch({
      type: get_mp3Url.type,
      song: preview_url
        ? {
            audio,
            name,
            imageUrl: album?.images[2].url,
            artist: album?.artists[0].name,
          }
        : null,
    });
  };

  const millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds: any = ((millis % 60000) / 1000).toFixed(0);

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const shortString = (str: string | undefined) => {
    if (str) {
      if (str.length > 17) {
        let strShortened = str.slice(0, 16);

        return `${strShortened}...`;
      }
      return str;
    }
  };
  return (
    <div onClick={play} className="secTrack">
      <div className="secTrack_name">
        <p>{number}</p>
        <IoPlaySharp></IoPlaySharp>
        <img src={album?.images[1].url} alt={album?.name}></img>
        <div>
          <h3>{shortString(name)}</h3>
          {prames.type && <h3>{album?.artists[0].name}</h3>}
        </div>
      </div>
      <div className="secTrack_mid">
        <p>{shortString(album?.name)}</p>
      </div>
      <div className="secTrack_mid">
        <p>{album?.release_date}</p>
      </div>

      <div className="secTrack_duration">
        <AiOutlineHeart></AiOutlineHeart>
        <p>{millisToMinutesAndSeconds(duration_ms)}</p>
        <BsThreeDots></BsThreeDots>
      </div>
    </div>
  );
}
