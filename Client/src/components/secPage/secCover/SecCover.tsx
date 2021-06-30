import React from "react";
import "./secCover.css";
interface props {
  info: any;
}

const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export default function SecCover({ info }: props) {
  return (
    <div className="secCover">
      <img src={info?.images[0].url} alt={info?.name}></img>
      <div className="secCover_contant">
        <h3>{capitalize(info?.type)}</h3>
        <h1>{info?.name}</h1>
        {info?.type == "artist" ? (
          <div>
            <p>Followers: {info?.followers.total}</p>
          </div>
        ) : info?.type == "playlist" ? (
          <div>
            <p>{info?.description}</p>
            <p>Followers: {info?.followers.total}</p>
          </div>
        ) : (
          <div>
            <p>Release Date: {info?.release_date}</p>
          </div>
        )}
      </div>
    </div>
  );
}
