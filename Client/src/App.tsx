import axios from "axios";
import { useEffect } from "react";
import "./App.css";
import Login from "./components/login/Login";
import MainPage from "./components/mainPage/MainPage";
import SpotifyWebApi from "spotify-web-api-node";
const code = new URLSearchParams(window.location.search).get("code");

const Spotfiy = new SpotifyWebApi({
  clientId: "4451beba5b2c42a4a9dbb72c109d2de5",
});

function App() {
  return (
    <div className="App">{code ? <MainPage></MainPage> : <Login></Login>}</div>
  );
}

export default App;
