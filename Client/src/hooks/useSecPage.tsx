import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function useSecPage(id: string, type: string) {
  const [artist, setArtist] = useState();
  const [tracks, setTracks] = useState();
  const [albums, setAlbums] = useState();
  const [relatedArtists, setRelatedArtists] = useState();
  const user = useSelector((state: any) => state.user);
  const Spotfiy = useSelector((state: any) => {
    return state.spotfiy;
  });

  useEffect(() => {
    if (id && type) {
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
            setAlbums(res.body.items);
          })
          .catch((err) => {
            console.log(err);
          });

        Spotfiy.getArtistRelatedArtists(id)
          .then((res) => {
            setRelatedArtists(res.body.artists);
          })
          .catch((err) => {
            console.log(err);
          });

        Spotfiy.getPlaylist("37i9dQZF1DX5Ejj0EkURtP")
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }, [id, type]);

  if (type.toLowerCase() === "artist")
    return { info: artist, tracks, lists: [albums, relatedArtists] };
}
