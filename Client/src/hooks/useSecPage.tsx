import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function useSecPage(id: string, type: string) {
  const [a, setA] = useState<any>();
  const [artist, setArtist] = useState();
  const [tracks, setTracks] = useState();
  const [albums, setAlbums] = useState();
  const user = useSelector((state: any) => state.user);
  const Spotfiy = useSelector((state: any) => {
    return state.spotfiy;
  });

  useEffect(() => {
    console.log(user);
    if (type.toLowerCase() === "artist") {
      Spotfiy.getArtist(id)
        .then((res) => {
          setArtist(res.body);
        })
        .catch((err) => {
          console.log(err);
        });

      Spotfiy.getArtistTopTracks(id, user.country)
        .then((res) => {
          setTracks(res.body.tracks);
        })
        .catch((err) => {
          console.log(err);
        });

      Spotfiy.getArtistAlbums(id)
        .then((res) => {
          setAlbums(res.body);
        })
        .catch((err) => {
          console.log(err);
        });

      Spotfiy.getArtistRelatedArtists(id)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });

      setA({ id, type });
    }
  }, [id, type]);

  return a;
}
