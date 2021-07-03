import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import CardsRows from "./cardsRows/CardsRows";
import "./mainPage.css";
import useMainRows from "../../hooks/useMainRows";
//imgBorder={row?.lists?[index].type=='artist' ? 50 :50}
export default function MainPage() {
  const Spotfiy = useSelector((state: any) => state.spotfiy);

  const rows = useMainRows();
  useEffect(() => {
    console.log(rows);
  }, [rows]);

  return (
    <div className="mainPage">
      {rows.map((row, index) => {
        return (
          <CardsRows
            imgBorder={row.lists && row.lists[index].type == "artist" ? 50 : 2}
            title={row.name}
            lists={row.lists}
            description={row.description}
          ></CardsRows>
        );
      })}
      {/*     <CardsRows
        imgBorder={50}
        title="Popular Artists"
        lists={artist}
      ></CardsRows>
      <CardsRows
        imgBorder={2}
        title="Play Lists"
        lists={playlists}
        description={description}
      ></CardsRows> */}
    </div>
  );
}
