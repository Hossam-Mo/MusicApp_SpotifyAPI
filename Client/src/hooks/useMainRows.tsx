import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import lists from "../types/lists";
import artists from "../types/artists";
export default function useMainRows(test) {
  const Spotfiy = useSelector((state: any) => state.spotfiy);
  const [artist, setArtist] = useState<artists[]>();
  const [featuredPlaylists, setFeaturedPlaylists] = useState<lists[]>();

  useEffect(() => {
    if (Spotfiy) {
      // geting the artists
      Spotfiy.getArtists([
        "5WUlDfRSoLAfcVSX1WnrxN",
        "66CXWjxzNUsdJxJ2JdwvnR",
        "1uNFoZAHBGtllmzznpCI3s",
        "53XhwfbYqKCa1cC15pYq2q",
        "5ZsFI1h6hIdQRw2ti0hz81",
        "06HL4z0CvFAxyc27GXpf02",
        "7vk5e3vY1uw9plTHJAMwjN",
        "6M2wZ9GZgrQXHCFfjv46we",
        "7dGJo4pcD2V6oG8kP0tJRR",
        "1Xyo4u8uXC1ZmMpatF05PJ",
      ])
        .then((r: any) => {
          console.log(r);
          setArtist(r.body.artists);
        })
        .catch((err: any) => {
          console.log(err);
        });

      Spotfiy.getFeaturedPlaylists()
        .then((r: any) => {
          console.log(r);
          setFeaturedPlaylists(r.body.playlists.items);
        })
        .catch((err: any) => {
          console.log(err);
        });
    }
  }, [Spotfiy]);

  return [
    { name: "Popular Artists", lists: artist },
    {
      name: "Featured Playlists",
      lists: featuredPlaylists,
      description: "Some of the developer's choice",
    },
  ];
}
