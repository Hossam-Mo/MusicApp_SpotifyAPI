import React from "react";
import ArtistCard from "../artistCard/ArtistCard";
import "./cardRows.css";
import artists from "../../../types/artists";
import lists from "../../../types/lists";
import album from "../../../types/albums";

interface props {
  title: string;
  description?: string;
  lists: artists[] | lists[] | album[] | undefined;
}

export default function CardsRows({ title, description, lists }: props) {
  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return (
    <div className="cardRows">
      <div className="cardRows_title">
        <div className="cardRows_titleMain">
          <h1>{title}</h1>
          {description && <h3>{description}</h3>}
        </div>
        <p>See all</p>
      </div>

      <div className="cardRows_cards">
        {lists?.map((list) => {
          return (
            <ArtistCard
              mainContant={capitalize(list.name)}
              secondaryContant={capitalize(list.type)}
              image={{
                borderRadius: 50,
                imgUrl: list.images[0].url,
              }}
            ></ArtistCard>
          );
        })}
      </div>
    </div>
  );
}
