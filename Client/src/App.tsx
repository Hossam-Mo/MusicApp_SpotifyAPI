import axios from "axios";
import { useEffect } from "react";
import "./App.css";
import Login from "./components/login/Login";
import MainPage from "./components/mainPage/MainPage";

const code = new URLSearchParams(window.location.search).get("code");

function App() {
  return (
    <div className="App">{code ? <MainPage></MainPage> : <Login></Login>}</div>
  );
}

export default App;
