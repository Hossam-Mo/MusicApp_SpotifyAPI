import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import artists from "../types/artists";
import lists from "../types/lists";
import album from "../types/albums";
import tracks from "../types/tracks";
export default function useSearch(input: string) {
  const Spotfiy = useSelector((state: any) => state.spotfiy);
  const [res, setRes] = useState<any>();
  const [tracks, setTracks] = useState<tracks[]>();

  const searchListsRander = (obj) => {
    interface newList {
      name: string;
      list: artists[] | lists[] | album[] | tracks[];
    }
    const capitalize = (s) => {
      if (typeof s !== "string") return "";
      return s.charAt(0).toUpperCase() + s.slice(1);
    };
    let newLists: any[] = [];
    let secLists: any[] = [];
    for (const key in obj) {
      newLists.push({ name: capitalize(key), list: obj[key].items });
    }
    console.log(newLists);

    for (let i in newLists) {
      secLists.push(
        newLists[i].list.filter((it) => {
          if (it.images.length == 0) {
            console.log("url is null");
            return null;
          } else {
            return { name: newLists[i].name, list: it };
          }
        })
      );
    }

    console.log(secLists);
    return newLists;
  };
  useEffect(() => {
    if (Spotfiy && input !== "") {
      Spotfiy.search(input, ["playlist", "artist", "album"])
        .then((res) => {
          console.log(res);

          setRes(searchListsRander(res.body));
        })
        .catch((err) => {
          console.log(err);
        });
      Spotfiy.searchTracks(input, { limit: 5 })
        .then((res) => {
          console.log(res);
          setTracks(res.body.tracks.items);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setRes(undefined);
    }
  }, [Spotfiy, input]);

  return { lists: res, tracks };
}
