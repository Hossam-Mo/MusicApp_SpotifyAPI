import ArtistCard from "../artistCard/ArtistCard";
import "./cardRows.css";
import artists from "../../../types/artists";
import lists from "../../../types/lists";
import album from "../../../types/albums";
import { Link } from "react-router-dom";

interface props {
  title: string;
  description?: string;
  lists: artists[] | lists[] | album[] | undefined;
  imgBorder: number | string;
}

export default function CardsRows({
  title,
  description,
  lists,
  imgBorder,
}: props) {
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
        <Link to="/popularArtists">
          <p>See all</p>
        </Link>
      </div>

      <div className="cardRows_cards">
        {lists?.map((list) => {
          return (
            <ArtistCard
              key={list.id}
              id={list.id}
              mainContant={capitalize(list.name)}
              secondaryContant={capitalize(list.type)}
              image={{
                borderRadius: imgBorder,
                imgUrl: list.images[0].url,
              }}
            ></ArtistCard>
          );
        })}
      </div>
    </div>
  );
}
