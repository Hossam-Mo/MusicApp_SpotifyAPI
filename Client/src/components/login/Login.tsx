import axios from "axios";
import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import useAuth from "../../hooks/useAuth";
import "./login.css";
const Spotfiy = new SpotifyWebApi({
  clientId: "4451beba5b2c42a4a9dbb72c109d2de5",
});
const authUrl =
  "https://accounts.spotify.com/authorize?client_id=4451beba5b2c42a4a9dbb72c109d2de5&response_type=code&redirect_uri=http://localhost:3000/&scope=user-read-private%20user-read-email%20user-read-recently-played";

export default function Login() {
  const token = useAuth();

  useEffect(() => {
    if (token) Spotfiy.setAccessToken(token);
  }, [token]);

  useEffect(() => {
    if (token) {
      Spotfiy.searchTracks("zayn")
        .then((r) => {
          console.log(r);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [token]);

  return (
    <div className="login">
      <img
        src="https://logodownload.org/wp-content/uploads/2016/09/spotify-logo-branca-white.png"
        alt="Logo"
      ></img>
      <a href={authUrl}>Log in with Spotify </a>
    </div>
  );
}
