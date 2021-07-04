import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import lists from "../types/lists";
import artists from "../types/artists";
import album from "../types/albums";
export default function useMainRows() {
  const Spotfiy = useSelector((state: any) => state.spotfiy);
  const [artist, setArtist] = useState<artists[]>();
  const [featuredPlaylists, setFeaturedPlaylists] = useState<lists[]>();
  const [newReleases, setNewReleases] = useState<album[]>();
  const [popularAlbums, setPopularAlbums] = useState<album[]>();

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
          setArtist(r.body.artists);
        })
        .catch((err: any) => {
          console.log(err);
        });

      Spotfiy.getFeaturedPlaylists()
        .then((r: any) => {
          setFeaturedPlaylists(r.body.playlists.items);
        })
        .catch((err: any) => {
          console.log(err);
        });
      Spotfiy.getNewReleases()
        .then((r: any) => {
          setNewReleases(r.body.albums.items);
        })
        .catch((err: any) => {
          console.log(err);
        });
      Spotfiy.getAlbums([
        "6d1vGZsr6Uy3h9IigBpPAf",
        "2xScKoVCQzjHbRL7oKbTGn",
        "6TVfiWmo8KtflUAmkK9gGF",
        "0UoYRs1WP7625dmeOsY3Zn",
        "0hPbP7ckqqFVftdTPatlED",
        "0IYocYNeH6jhhToqtqzJgC",
        "18yAP4zwFlTwep9rQZChVa",
        "2qjb5OwlllLLOmrueU08kG",
        "2fyOpT5c9kxR8zbDh6UtXh",
        "6gjoP9QAJ8QYDjBoVV8p0o",
        "0H1ASykMKIX8PYfqxbxBar",
        "2DNHRnOx39w2HyH8H6vXEW",
        "5wne9TQpM9mL5qApKph2U2",
      ])
        .then((r: any) => {
          const albums = r.body.albums.filter((album) => {
            if (album) {
              return album;
            }
          });
          setPopularAlbums(albums);
        })
        .catch((err: any) => {
          console.log(err);
        });
    }
  }, [Spotfiy]);

  return [
    { name: "New Releases", lists: newReleases },
    { name: "Popular Artists", lists: artist },
    {
      name: "Featured Playlists",
      lists: featuredPlaylists,
      description: "Some of the developer's choice",
    },
    { name: "Pupular Albums", lists: popularAlbums },
  ];
}
