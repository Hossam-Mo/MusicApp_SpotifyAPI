import React from "react";
import "./secTrack.css";
import tracks from "../../../../types/tracks";
import { useEffect } from "react";

export default function SecTrack({
  name,
  duration_ms,
  id,
  type,
  album,
  number,
}: tracks) {
  useEffect(() => {
    console.log(duration_ms);
  }, []);

  return (
    <div className="secTrack">
      <div className="secTrack_name">
        <p>{number}</p>
        <img src={album.images[1].url} alt={album.name}></img>
        <h3>{name}</h3>
      </div>
      <div className="secTrack_mid">
        <p>{album.name}</p>
      </div>
      <div className="secTrack_mid">
        <p>{album.release_date}</p>
      </div>

      <div className="secTrack_duration">{duration_ms}</div>
    </div>
  );
}
