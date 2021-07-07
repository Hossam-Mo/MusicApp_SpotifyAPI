import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function useSearch(input: string) {
  const Spotfiy = useSelector((state: any) => state.spotfiy);

  useEffect(() => {
    Spotfiy.search(input, ["playlist", "artist", "album", "track"])
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [Spotfiy, input]);
}
