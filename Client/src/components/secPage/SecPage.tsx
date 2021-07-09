import { useEffect } from "react";

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
    window.scrollTo(0, 0);
  }, [prames]);
useEffect(() => {

  console.log(lists)
  

}, [lists])



  return (
    <div className="secPage">

      {
        lists.info? <div>    <div className="secPage_background"></div>
        <SecCover info={lists?.info}></SecCover>
        <SecTracks tracks={lists?.tracks} lists={lists?.lists}></SecTracks></div>: <div> Sorry we could not find this page</div>
      }
      
    </div>
  );
}
