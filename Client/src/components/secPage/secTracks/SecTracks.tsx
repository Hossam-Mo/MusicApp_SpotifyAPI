import React from "react";
import SecAdd from "../secAdd/SecAdd";
import SecTrack from "./secTack/SecTrack";
import "./secTracks.css";
import tracks from "../../../types/tracks";

export default function SecTracks() {
  return (
    <div className="secTracks">
      <SecAdd></SecAdd>
    </div>
  );
}
