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
  const prames = useParams<prames>();
  const list = useSecPage(prames.id, prames.type);

  useEffect(() => {
    console.log("tihs is list", list);
  }, [list]);

  return (
    <div className="secPage">
      {/*      <div
        style={{ backgroundImage: `url(${coverImage?.images[0].url})` }}
        className="secPage_cover"
      ></div> */}
    </div>
  );
}
