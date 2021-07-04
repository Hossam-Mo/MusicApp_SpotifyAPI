import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function useAll(pageName, id) {
  const Spotfiy = useSelector((state: any) => state.spotfiy);

  const [res, setRes] = useState<any>();

  useEffect(() => {
    if (Spotfiy && pageName) {
      if (!id) {
        switch (pageName) {
          case "Popular Artists": {
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
                setRes(r.body.artists);
              })
              .catch((err: any) => {
                console.log(err);
              });
            return;
          }
          case "New Releases": {
            Spotfiy.getNewReleases({ limit: 50 })
              .then((r: any) => {
                setRes(r.body.albums.items);
              })
              .catch((err: any) => {
                console.log(err);
              });
            return;
          }
          case "Featured Playlists": {
            Spotfiy.getFeaturedPlaylists()
              .then((r: any) => {
                setRes(r.body.playlists.items);
              })
              .catch((err: any) => {
                console.log(err);
              });

            return;
          }
          case "Pupular Albums": {
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
                setRes(albums);
              })
              .catch((err: any) => {
                console.log(err);
              });
            return;
          }

          default:
            return;
        }
      } else {
        switch (pageName) {
          case "Albums": {
            Spotfiy.getArtistAlbums(id, { limit: 50 })
              .then((res) => {
                setRes(res.body.items);
              })
              .catch((err) => {
                console.log(err);
              });
            return;
          }
          case "Related Artist": {
            Spotfiy.getArtistRelatedArtists(id)
              .then((res) => {
                setRes(res.body.artists);
              })
              .catch((err) => {
                console.log(err);
              });

            return;
          }
          default:
            return;
        }
      }
    }
  }, [Spotfiy]);

  return res;
}
