import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useSecPage from "../../hooks/useSecPage";
import SecCover from "./secCover/SecCover";
import "./secPage.css";
import SecTracks from "./secTracks/SecTracks";

//   Spotfiy.getArtist()

interface prames {
  id: string;
  type: string;
}
export default function SecPage() {
  const prames = useParams<prames>();
  const lists = useSecPage(prames.id, prames.type);

  useEffect(() => {
    console.log("tihs is list", lists);
  }, [lists]);

  return (
    <div className="secPage">
      <div className="secPage_background"></div>
      {/*      <div
        style={{ backgroundImage: `url(${coverImage?.images[0].url})` }}
        className="secPage_cover"
      ></div> */}
      <SecCover info={lists?.info}></SecCover>
      <SecTracks tracks={lists?.tracks} lists={lists?.lists}></SecTracks>
    </div>
  );
}
