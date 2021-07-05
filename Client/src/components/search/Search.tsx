import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import categories from "../../types/categories";
import "./search.css";

export default function Search() {
  const Spotify = useSelector((state: any) => state.spotfiy);

  const [categories, setCategories] = useState<categories[]>();

  useEffect(() => {
    Spotify.getCategories()
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
    <div>
      {categories?.map((item) => {
        return item.name;
      })}
    </div>
  );
}
