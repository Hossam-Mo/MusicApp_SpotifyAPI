import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import SpotifyWebApi from "spotify-web-api-node";
import useAuth from "../../hooks/useAuth";
import { get_user } from "../../redux/actionTypes";
import Leftslide from "./leftslide/Leftslide";

const Spotfiy = new SpotifyWebApi({
  clientId: "4451beba5b2c42a4a9dbb72c109d2de5",
});
export default function MainPage() {
  const token = useAuth();

  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      Spotfiy.setAccessToken(token);

      Spotfiy.getMe()
        .then((user) => {
          dispatch({
            type: get_user.type,
            user: user,
          });
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
