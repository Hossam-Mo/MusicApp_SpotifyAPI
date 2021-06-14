import "./login.css";

const authUrl =
  "https://accounts.spotify.com/authorize?client_id=4451beba5b2c42a4a9dbb72c109d2de5&response_type=code&redirect_uri=http://localhost:3000/&scope=user-read-private%20user-read-email%20user-read-recently-played";

export default function Login() {
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
