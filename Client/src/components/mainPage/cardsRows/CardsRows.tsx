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
              mainContant={list.name}
              secondaryContant={list.type}
              image={{
                borderRadius: 50,
                imgUrl: list.images[0].url,
              }}
            ></ArtistCard>
          );
        })}
        <ArtistCard
          mainContant="Zayn"
          secondaryContant="Artist"
          image={{
            imgUrl:
              "https://pbs.twimg.com/profile_images/1308525962859098114/SFa770Jq_400x400.jpg",
            borderRadius: 50,
          }}
        ></ArtistCard>
        <ArtistCard
          mainContant="Zayn"
          secondaryContant="Artist"
          image={{
            imgUrl:
              "https://pbs.twimg.com/profile_images/1308525962859098114/SFa770Jq_400x400.jpg",
            borderRadius: 50,
          }}
        ></ArtistCard>
        <ArtistCard
          mainContant="Zayn"
          secondaryContant="Artist"
          image={{
            imgUrl:
              "https://pbs.twimg.com/profile_images/1308525962859098114/SFa770Jq_400x400.jpg",
            borderRadius: 50,
          }}
        ></ArtistCard>
        <ArtistCard
          mainContant="Zayn"
          secondaryContant="Artist"
          image={{
            imgUrl:
              "https://pbs.twimg.com/profile_images/1308525962859098114/SFa770Jq_400x400.jpg",
            borderRadius: 50,
          }}
        ></ArtistCard>
        <ArtistCard
          mainContant="Zayn"
          secondaryContant="Artist"
          image={{
            imgUrl:
              "https://pbs.twimg.com/profile_images/1308525962859098114/SFa770Jq_400x400.jpg",
            borderRadius: 50,
          }}
        ></ArtistCard>
        <ArtistCard
          mainContant="Zayn"
          secondaryContant="Artist"
          image={{
            imgUrl:
              "https://pbs.twimg.com/profile_images/1308525962859098114/SFa770Jq_400x400.jpg",
            borderRadius: 50,
          }}
        ></ArtistCard>
        <ArtistCard
          mainContant="Zayn"
          secondaryContant="Artist"
          image={{
            imgUrl:
              "https://pbs.twimg.com/profile_images/1308525962859098114/SFa770Jq_400x400.jpg",
            borderRadius: 50,
          }}
        ></ArtistCard>

        <ArtistCard
          mainContant="Zayn"
          secondaryContant="Artist"
          image={{
            imgUrl:
              "https://pbs.twimg.com/profile_images/1308525962859098114/SFa770Jq_400x400.jpg",
            borderRadius: 50,
          }}
        ></ArtistCard>
        <ArtistCard
          mainContant="Zayn"
          secondaryContant="Artist"
          image={{
            imgUrl:
              "https://pbs.twimg.com/profile_images/1308525962859098114/SFa770Jq_400x400.jpg",
            borderRadius: 50,
          }}
        ></ArtistCard>
        <ArtistCard
          mainContant="Zayn"
          secondaryContant="Artist"
          image={{
            imgUrl:
              "https://pbs.twimg.com/profile_images/1308525962859098114/SFa770Jq_400x400.jpg",
            borderRadius: 50,
          }}
        ></ArtistCard>
        <ArtistCard
          mainContant="Zayn"
          secondaryContant="Artist"
          image={{
            imgUrl:
              "https://pbs.twimg.com/profile_images/1308525962859098114/SFa770Jq_400x400.jpg",
            borderRadius: 50,
          }}
        ></ArtistCard>
        <ArtistCard
          mainContant="Zayn"
          secondaryContant="Artist"
          image={{
            imgUrl:
              "https://pbs.twimg.com/profile_images/1308525962859098114/SFa770Jq_400x400.jpg",
            borderRadius: 50,
          }}
        ></ArtistCard>
        <ArtistCard
          mainContant="Zayn"
          secondaryContant="Artist"
          image={{
            imgUrl:
              "https://pbs.twimg.com/profile_images/1308525962859098114/SFa770Jq_400x400.jpg",
            borderRadius: 50,
          }}
        ></ArtistCard>
        <ArtistCard
          mainContant="Zayn"
          secondaryContant="Artist"
          image={{
            imgUrl:
              "https://pbs.twimg.com/profile_images/1308525962859098114/SFa770Jq_400x400.jpg",
            borderRadius: 50,
          }}
        ></ArtistCard>
        <ArtistCard
          mainContant="Zayn"
          secondaryContant="Artist"
          image={{
            imgUrl:
              "https://pbs.twimg.com/profile_images/1308525962859098114/SFa770Jq_400x400.jpg",
            borderRadius: 50,
          }}
        ></ArtistCard>
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
