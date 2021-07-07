import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import "./desktopNav.css";
import { BsSearch } from "react-icons/bs";

interface props {
  searchInput?: string;
  setSearchInput?: (set) => void;
}

export default function DesktopNav({ searchInput, setSearchInput }: props) {
  const user = useSelector((state: any) => state.user);
  const location = useLocation();

  return (
    <div
      className="desktopNav"
      style={{
        position: location.pathname === "/search" ? "sticky" : "fixed",
      }}
    >
      {location.pathname === "/search" ? (
        <div className="desktopNav_input">
          <BsSearch></BsSearch>
          <input
            value={searchInput}
            onChange={(e) => {
              if (setSearchInput) setSearchInput(e.target.value);
            }}
            placeholder="Artists, Songs, or Prodcasts"
          />
        </div>
      ) : (
        <div></div>
      )}

      <div className="desktopNav_user">
        <img src={user?.images[0].url} alt={user?.display_name}></img>
        <h3>{user?.display_name}</h3>
      </div>
    </div>
  );
}
