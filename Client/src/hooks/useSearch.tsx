import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import artists from "../types/artists";
import lists from "../types/lists";
import album from "../types/albums";
import tracks from "../types/tracks";

export default function useSearch(input: string) {
  const Spotfiy = useSelector((state: any) => state.spotfiy);
  const [res, setRes] = useState<any>();
  const searchListsRander = (obj) => {
    interface newList {
      name: string;
      list: artists | lists | album | tracks;
    }
    const capitalize = (s) => {
      if (typeof s !== "string") return "";
      return s.charAt(0).toUpperCase() + s.slice(1);
    };
    let newLists: any[] = [];
    for (const key in obj) {
      newLists.push({ name: capitalize(key), list: obj[key].items });
    }
    console.log(newLists);

    newLists = newLists.filter((item, index) => {
      if (item.list[index].images[0].url) {
        return item;
      } else {
        return undefined;
      }
    });
    console.log(newLists);
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
    } else {
      setRes(undefined);
    }
  }, [Spotfiy, input]);

  return res;
}
