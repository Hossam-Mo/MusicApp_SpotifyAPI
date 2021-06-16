import { useEffect } from "react";
import { useSelector } from "react-redux";
import CardsRows from "./cardsRows/CardsRows";

export default function MainPage() {
  const Spotify = useSelector((state: any) => state.spotify);
  useEffect(() => {
    if (Spotify)
      Spotify.getMe()
        .then((user: any) => {
          console.log(user);
        })
        .catch((err: any) => {
          console.log(err);
        });
  }, [Spotify]);
  return (
    <div>
      <CardsRows></CardsRows>
    </div>
  );
}
