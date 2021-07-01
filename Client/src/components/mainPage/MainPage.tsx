import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import CardsRows from "./cardsRows/CardsRows";
import "./mainPage.css";
import artists from "../../types/artists";
import lists from "../../types/lists";

export default function MainPage() {
  const Spotfiy = useSelector((state: any) => state.spotfiy);
  const [artist, setArtist] = useState<artists[]>();
  const [playlists, setPlaylists] = useState<lists[]>();
  const [description, setDescription] = useState<string>();
  useEffect(() => {
    if (Spotfiy) {
      // geting the artists
      Spotfiy.getArtists([
        "5WUlDfRSoLAfcVSX1WnrxN",
        "66CXWjxzNUsdJxJ2JdwvnR",
        "1uNFoZAHBGtllmzznpCI3s",
        "53XhwfbYqKCa1cC15pYq2q",
        "5ZsFI1h6hIdQRw2ti0hz81",
        "06HL4z0CvFAxyc27GXpf02",
        "7vk5e3vY1uw9plTHJAMwjN",
        "6M2wZ9GZgrQXHCFfjv46we",
        "7dGJo4pcD2V6oG8kP0tJRR",
        "1Xyo4u8uXC1ZmMpatF05PJ",
      ])
        .then((r: any) => {
          console.log(r);
          setArtist(r.body.artists);
        })
        .catch((err: any) => {
          console.log(err);
        });
      Spotfiy.getFeaturedPlaylists()
        .then((r: any) => {
          console.log(r);
          setPlaylists(r.body.playlists.items);
          setDescription(r.body.message);
        })
        .catch((err: any) => {
          console.log(err);
        });
    }
  }, [Spotfiy]);

  return (
    <div className="mainPage">
      <CardsRows
        imgBorder={50}
        title="Popular Artists"
        lists={artist}
      ></CardsRows>
      <CardsRows
        imgBorder={2}
        title="Play Lists"
        lists={playlists}
        description={description}
      ></CardsRows>
    </div>
  );
}
