import { url } from "inspector";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./secPage.css";

//   Spotfiy.getArtist()

interface prames {
  id: string;
  type: string;
}
export default function SecPage() {
  const Spotfiy = useSelector((state: any) => state.spotfiy);

  const prames = useParams<prames>();

  const [test, setTest] = useState<any>();

  /*   useEffect(() => {
    console.log("this is spotify", Spotify);
  }, [spotify]); */

  useEffect(() => {
    console.log(prames);

    if (prames.id && Spotfiy) {
      Spotfiy.getArtist(prames.id)
        .then((res) => {
          setTest(res.body);
        })
        .catch((err) => {
          console.log(err);
        });
      Spotfiy.getArtistTopTracks(prames.id, "JO")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [prames, Spotfiy]);

  useEffect(() => {
    console.log(test?.images[0]);
  }, [test]);
  return (
    <div className="secPage">
      <div
        style={{ backgroundImage: `url(${test?.images[0].url})` }}
        className="test"
      ></div>
    </div>
  );
}
