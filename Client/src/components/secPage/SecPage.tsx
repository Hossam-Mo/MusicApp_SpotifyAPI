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

  useEffect(() => {
    console.log(prames);

    if (prames.id && Spotfiy) {
      Spotfiy.getArtist(prames.id)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [prames, Spotfiy]);

  return <div className="secPage">hello</div>;
}
