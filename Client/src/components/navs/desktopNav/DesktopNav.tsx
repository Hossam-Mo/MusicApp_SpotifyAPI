import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import "./desktopNav.css";
import { BsSearch } from "react-icons/bs";

export default function DesktopNav() {
  const Spotify = useSelector((state: any) => state.spotfiy);
  const user = useSelector((state: any) => state.user);
  const location = useLocation();
  useEffect(() => {
    console.log(location);
  }, [location]);
  return (
    <div
      className="desktopNav"
      style={{
        position: location.pathname === "/search" ? "sticky" : "fixed",
      }}
    >
      {location.pathname === "/search" ? (
        <div className="desktopNav_input">
          <BsSearch></BsSearch>
          <input placeholder="Artists, Songs, or Prodcasts" />
        </div>
      ) : (
        <div></div>
      )}

      <div className="desktopNav_user">
        <img src={user?.images[0].url} alt={user?.display_name}></img>
        <h3>{user?.display_name}</h3>
      </div>
    </div>
  );
}
