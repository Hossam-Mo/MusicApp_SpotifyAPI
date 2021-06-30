import React from "react";
import "./secTrack.css";
import tracks from "../../../../types/tracks";

export default function SecTrack({ name, duration, id, type, album }: tracks) {
  return (
    <div className="secTrack">
      <h1>{name}</h1>
    </div>
  );
}
