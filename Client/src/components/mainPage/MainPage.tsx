import { useEffect } from "react";
import { useSelector } from "react-redux";
import CardsRows from "./cardsRows/CardsRows";
import "./mainPage.css";

export default function MainPage() {
  const Spotfiy = useSelector((state: any) => state.spotfiy);
  useEffect(() => {
    if (Spotfiy)
      Spotfiy.getPlaylist("37i9dQZF1DWVi45nh2EuPP")
        .then((r: any) => {
          console.log(r);
        })
        .catch((err: any) => {
          console.log(err);
        });
  }, [Spotfiy]);
  return (
    <div className="mainPage">
      <CardsRows
        title="Artists"
        description="all your fivert artist"
      ></CardsRows>
    </div>
  );
}
