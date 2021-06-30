import "./secTrack.css";
import tracks from "../../../../types/tracks";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

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
}: tracks) {
  const prames = useParams<prames>();
  useEffect(() => {
    console.log(prames);
  }, [prames]);

  return (
    <div className="secTrack">
      <div className="secTrack_name">
        <p>{number}</p>
        <img src={album.images[1].url} alt={album.name}></img>
        <div>
          <h3>{name}</h3>
          {prames.type && <h3>{album.artists[0].name}</h3>}
        </div>
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
