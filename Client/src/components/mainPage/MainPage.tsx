import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import useAuth from "../../hooks/useAuth";
import Leftslide from "./leftslide/Leftslide";

const Spotfiy = new SpotifyWebApi({
  clientId: "4451beba5b2c42a4a9dbb72c109d2de5",
});
export default function MainPage() {
  const token = useAuth();

  useEffect(() => {
    if (token) {
      Spotfiy.setAccessToken(token);
      Spotfiy.searchTracks("zayn")
        .then((r) => {
          console.log("this is", r);
        })
        .catch((err) => {
          console.log(err);
        });

      Spotfiy.getMe()
        .then((r) => {
          console.log(r);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [token]);

  return (
    <div>
      <Leftslide></Leftslide>
    </div>
  );
}
