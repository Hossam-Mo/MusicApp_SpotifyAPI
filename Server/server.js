const express = require("express");
const cors = require("cors");
const SpotfiyApi = require("spotify-web-api-node");
const { getAudioDurationInSeconds } = require("get-audio-duration");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ mess: "its working" });
});
app.post("/audioDuraction", (req, res) => {
  getAudioDurationInSeconds(req.body.url).then((duration) => {
    var minutes = Math.floor(duration / 60);
    var seconds = duration - minutes * 60;

    res.json(`${minutes}:${seconds}`);
  });
});
app.post("/login", (req, res) => {
  if (req.body.code) {
    const spotfiyApi = new SpotfiyApi({
      clientId: "4451beba5b2c42a4a9dbb72c109d2de5",
      clientSecret: "7e8e8de8a20049878f7526e23fff4fab",
      redirectUri: "http://localhost:3000/",
    });
    spotfiyApi
      .authorizationCodeGrant(req.body.code)
      .then((r) => {
        res.json({
          accessToken: r.body.access_token,
          refreshToken: r.body.refresh_token,
          expiresIn: r.body.expires_in,
        });
      })
      .catch(() => {
        res.sendStatus(400);
      });
  } else {
    res.json({ mess: "the code is missing" });
  }
});
app.listen(5000, () => {
  console.log("server is working");
});
