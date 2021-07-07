import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function useSearch(input: string) {
  const Spotfiy = useSelector((state: any) => state.spotfiy);
  const [res, setRes] = useState();

  useEffect(() => {
    if (Spotfiy && input !== "") {
      Spotfiy.search(input, ["playlist", "artist", "album", "track"])
        .then((res) => {
          console.log(res);
          setRes(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setRes(undefined);
    }
  }, [Spotfiy, input]);

  return res;
}
