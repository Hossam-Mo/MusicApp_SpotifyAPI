import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAll from "../../hooks/useAll";
import ArtistCard from "../mainPage/artistCard/ArtistCard";
import "./seeAll.css";

interface prames {
  pageName: string;
  id?: string;
}
export default function SeeAll() {
  const prames = useParams<prames>();
  const lists = useAll(prames.pageName, prames.id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [prames]);

  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return (
    <div className="seeAll">
      {lists?.map((list) => {
        return (
          <ArtistCard
            key={list.id}
            id={list.id}
            mainContant={capitalize(list.name)}
            secondaryContant={capitalize(list.type)}
            image={{
              borderRadius: prames.pageName == "Popular Artists" ? 50 : 1,
              imgUrl: list.images[0].url,
            }}
          ></ArtistCard>
        );
      })}
    </div>
  );
}
