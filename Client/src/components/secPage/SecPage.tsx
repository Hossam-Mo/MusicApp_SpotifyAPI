import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useSecPage from "../../hooks/useSecPage";
import "./secPage.css";

//   Spotfiy.getArtist()

interface prames {
  id: string;
  type: string;
}
export default function SecPage() {
  const Spotfiy = useSelector((state: any) => state.spotfiy);
  const prames = useParams<prames>();

  const list = useSecPage(prames.id, prames.type);

  useEffect(() => {
    console.log("tihs is list", list);
  }, [list]);

  useEffect(() => {
    console.log(prames);

    if (prames.id && Spotfiy) {
      Spotfiy.getArtistTopTracks(prames.id, "JO")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [prames, Spotfiy]);

  return (
    <div className="secPage">
      {/*      <div
        style={{ backgroundImage: `url(${coverImage?.images[0].url})` }}
        className="secPage_cover"
      ></div> */}
    </div>
  );
}
