import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useAuth from "./hooks/useAuth";
import { get_spotfiy, get_user } from "./redux/actionTypes";
import SpotifyWebApi from "spotify-web-api-node";
import Login from "./components/login/Login";
import MainPage from "./components/mainPage/MainPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Leftslide from "./components/leftslide/Leftslide";
const code = new URLSearchParams(window.location.search).get("code");
const Spotfiy = new SpotifyWebApi({
  clientId: "4451beba5b2c42a4a9dbb72c109d2de5",
});

function App() {
  const token = useAuth();

  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      Spotfiy.setAccessToken(token);

      dispatch({
        type: get_spotfiy.type,
        spotify: Spotfiy,
      });

      Spotfiy.getMe()
        .then((user) => {
          console.log(user);
          dispatch({
            type: get_user.type,
            user: user.body,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [token]);
  return (
    <div className="App">
      {code ? (
        <Router>
          <Leftslide></Leftslide>

          <Switch>
            <Route exact path="/">
              <MainPage></MainPage>
            </Route>
          </Switch>
        </Router>
      ) : (
        <Login></Login>
      )}
    </div>
  );
}

export default App;
