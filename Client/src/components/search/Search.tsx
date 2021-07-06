import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import categories from "../../types/categories";
import DesktopNav from "../navs/desktopNav/DesktopNav";
import Category from "./category/Category";
import "./search.css";

export default function Search() {
  const Spotify = useSelector((state: any) => state.spotfiy);

  const [categories, setCategories] = useState<categories[]>();

  useEffect(() => {
    Spotify.getCategories({ limit: 50 })
      .then((res) => {
        setCategories(res.body.categories.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [Spotify]);

  return (
    <div className="search">
      <DesktopNav></DesktopNav>
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
