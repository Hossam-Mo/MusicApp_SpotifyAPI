import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./search.css";

export default function Search() {
  const Spotify = useSelector((state: any) => state.spotfiy);

  useEffect(() => {
    console.log(Spotify);
  }, [Spotify]);

  return <div>hello</div>;
}
