import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import CardsRows from "./cardsRows/CardsRows";
import "./mainPage.css";
import artists from "../../types/artists";

export default function MainPage() {
  const Spotfiy = useSelector((state: any) => state.spotfiy);
  const [artist, setArtist] = useState<artists[]>();
  useEffect(() => {
    if (Spotfiy)
      Spotfiy.getArtists([
        "5WUlDfRSoLAfcVSX1WnrxN",
        "66CXWjxzNUsdJxJ2JdwvnR",
        "1uNFoZAHBGtllmzznpCI3s",
        "53XhwfbYqKCa1cC15pYq2q",
        "5ZsFI1h6hIdQRw2ti0hz81",
      ])
        .then((r: any) => {
          console.log(r);
          setArtist(r.body.artists);
        })
        .catch((err: any) => {
          console.log(err);
        });
  }, [Spotfiy]);

  useEffect(() => {
    console.log("this is the list", artist);
  }, [artist]);
  return (
    <div className="mainPage">
      <CardsRows
        title="Artists"
        description="all your fivert artist"
      ></CardsRows>
    </div>
  );
}
