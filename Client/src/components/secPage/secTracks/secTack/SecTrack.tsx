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
      <div>
        <p>{number}</p>
        <img src={album.images[1].url} alt={album.name}></img>
        <h3>{name}</h3>
      </div>
      <h3>{type}</h3>
      <div>{duration_ms}</div>
    </div>
  );
}
