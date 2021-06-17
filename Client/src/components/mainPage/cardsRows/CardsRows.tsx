import React from "react";
import ArtistCard from "../artistCard/ArtistCard";
import "./cardRows.css";

interface props {
  title: string;
  description?: string;
}
export default function CardsRows({ title, description }: props) {
  return (
    <div className="cardRows">
      <div className="cardRows_title">
        <div className="cardRows_titleMain">
          <h1>{title}</h1>
          {description && <h3>{description}</h3>}
        </div>
        <p>See all</p>
      </div>

      <div>
        <ArtistCard
          mainContant="Zayn"
          secondaryContant="Artist"
          image={{
            imgUrl:
              "https://pbs.twimg.com/profile_images/1308525962859098114/SFa770Jq_400x400.jpg",
            borderRadius: 50,
          }}
        ></ArtistCard>
      </div>
    </div>
  );
}