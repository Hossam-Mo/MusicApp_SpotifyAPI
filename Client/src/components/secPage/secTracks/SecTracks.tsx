import SecAdd from "../secAdd/SecAdd";
import SecTrack from "./secTack/SecTrack";
import "./secTracks.css";
import tracks from "../../../types/tracks";

export default function SecTracks({ tracks }: { tracks?: tracks[] }) {
  return (
    <div className="secTracks">
      <SecAdd></SecAdd>
      {tracks?.map((track) => {
        return (
          <SecTrack
            key={track.id}
            id={track.id}
            type={track.type}
            duration={track.duration}
            name={track.name}
            album={track.album}
          ></SecTrack>
        );
      })}
    </div>
  );
}
