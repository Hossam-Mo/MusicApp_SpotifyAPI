import SecAdd from "../secAdd/SecAdd";
import SecTrack from "./secTack/SecTrack";
import "./secTracks.css";
import tracks from "../../../types/tracks";
import album from "../../../types/albums";
import artists from "../../../types/artists";
import lists from "../../../types/lists";
import CardsRows from "../../mainPage/cardsRows/CardsRows";

interface rows {
  name: string;
  list: album[] | artists[] | lists[] | undefined;
}

interface props {
  tracks?: tracks[];
  lists?: rows[];
}

export default function SecTracks({ tracks, lists }: props) {
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
      {lists?.map((row, index) => {
        return (
          <CardsRows
            key={index}
            lists={row.list}
            title={row.name}
            imgBorder={row.list && row.list[0].type == "artist" ? 50 : 1}
          ></CardsRows>
        );
      })}
    </div>
  );
}
