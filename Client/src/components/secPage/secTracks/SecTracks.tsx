import SecAdd from "../secAdd/SecAdd";
import SecTrack from "./secTack/SecTrack";
import "./secTracks.css";
import tracks from "../../../types/tracks";

export default function SecTracks({ tracks }: { tracks?: tracks[] }) {
  return (
    <div className="secTracks">
      <SecAdd></SecAdd>
      <h3>Tracks</h3>
      {tracks?.map((track, index) => {
        return (
          <SecTrack
            key={track.id}
            id={track.id}
            type={track.type}
            duration_ms={track.duration_ms}
            name={track.name}
            album={track.album}
            number={index + 1}
          ></SecTrack>
        );
      })}
    </div>
  );
}
