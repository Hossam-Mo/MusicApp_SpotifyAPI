import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import useSearch from "../../hooks/useSearch";
import categories from "../../types/categories";
import CardsRows from "../mainPage/cardsRows/CardsRows";
import DesktopNav from "../navs/desktopNav/DesktopNav";
import Category from "./category/Category";
import "./search.css";

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
  /*   useEffect(() => {
    for (const key in searchLists) {
      console.log(`${key}: ${searchLists[key]}`);
    }
  }, [searchLists]); */

  return (
    <div className="search">
      <DesktopNav
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      ></DesktopNav>

      {searchLists?.map((list) => {
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
