import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import categories from "../../types/categories";
import Category from "./category/Category";
import "./search.css";

export default function Search() {
  const Spotify = useSelector((state: any) => state.spotfiy);

  const [categories, setCategories] = useState<categories[]>();

  useEffect(() => {
    Spotify.getCategories({ limit: 50 })
      .then((res) => {
        console.log(res);
        setCategories(res.body.categories.items);
      })
      .catch((err) => {
        console.log(err);
      });
    Spotify.getPlaylistsForCategory("toplists")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [Spotify]);

  useEffect(() => {
    console.log(categories);
  }, [categories]);
  return (
    <div className="search">
      <h1>Browse all</h1>
      <div className="search_categories">
        {categories?.map((item) => {
          return (
            <Category
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
