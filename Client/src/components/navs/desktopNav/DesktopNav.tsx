import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./desktopNav.css";

export default function DesktopNav() {
  const Spotify = useSelector((state: any) => state.spotfiy);
  const user = useSelector((state: any) => state.user);
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <div className="desktopNav">
      <div></div>
      <div className="desktopNav_user">
        <img src={user?.images[0].url} alt={user?.display_name}></img>
        <h3>{user?.display_name}</h3>
      </div>
    </div>
  );
}
