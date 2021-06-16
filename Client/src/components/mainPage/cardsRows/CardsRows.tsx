import React from "react";
import ArtistCard from "../artistCard/ArtistCard";
export default function CardsRows() {
  return (
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
  );
}
