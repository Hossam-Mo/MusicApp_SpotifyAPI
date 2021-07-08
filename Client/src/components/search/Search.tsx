import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import useSearch from "../../hooks/useSearch";
import categories from "../../types/categories";
import CardsRows from "../mainPage/cardsRows/CardsRows";
import DesktopNav from "../navs/desktopNav/DesktopNav";
import SecTrack from "../secPage/secTracks/secTack/SecTrack";
import Category from "./category/Category";
import "./search.css";
/* import artists from "../../types/artists";
import lists from "../../types/lists";
import album from "../../types/albums";
import tracks from "../../types/tracks"; */

export default function Search() {
  const Spotify = useSelector((state: any) => state.spotfiy);
  const [searchInput, setSearchInput] = useState("");
  const [categories, setCategories] = useState<categories[]>();
  const searchLists = useSearch(searchInput);

  useEffect(() => {
    if (Spotify) {
      Spotify.getCategories({ limit: 50 })
        .then((res) => {
          setCategories(res.body.categories.items);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [Spotify]);

  return (
    <div className="search">
      <DesktopNav
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      ></DesktopNav>
      {searchLists.tracks && (
        <h1 style={{ fontSize: 24, fontWeight: 700 }}>Songs</h1>
      )}
      {searchLists?.tracks?.map((track, index) => {
        return (
          <SecTrack
            key={track.id}
            id={track.id}
            type={track.type}
            duration_ms={track.duration_ms}
            name={track.name}
            album={track.album}
            number={index + 1}
          ></SecTrack>
        );
      })}
      {searchLists?.lists?.map((list) => {
        return (
          <CardsRows
            imgBorder={list.name == "artists" ? 50 : 2}
            title={list.name}
            lists={list.list}
          ></CardsRows>
        );
      })}

      <h1>Browse all</h1>
      <div className="search_categories">
        {categories?.map((item) => {
          return (
            <Category
              key={item.id}
              id={item.id}
              name={item.name}
              icons={item.icons}
            ></Category>
          );
        })}
      </div>
    </div>
  );
}
