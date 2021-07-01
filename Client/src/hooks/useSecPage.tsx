import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function useSecPage(id: string, type: string) {
  const [info, setInfo] = useState();
  const [tracks, setTracks] = useState();
  const [albums, setAlbums] = useState();
  const [relatedArtists, setRelatedArtists] = useState();
  const user = useSelector((state: any) => state.user);
  const Spotfiy = useSelector((state: any) => {
    return state.spotfiy;
  });

  useEffect(() => {
    if (id && type) {
      if (type.toLowerCase() == "artist") {
        Spotfiy.getArtist(id)
          .then((res) => {
            setInfo(res.body);
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

        /*         Spotfiy.getPlaylist("37i9dQZF1DX5Ejj0EkURtP")
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          }); */
      } else if (type.toLowerCase() == "album") {
        Spotfiy.getAlbum(id)
          .then((r) => {
            let newTracks;
            newTracks = r.body.tracks.items.map((item) => {
              item["album"] = r.body;
              return item;
            });

            setInfo(r.body);
            setTracks(newTracks);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }, [id, type]);

  return {
    info,
    tracks,
    lists:
      type.toLowerCase() === "artist"
        ? [
            { name: "Albums", list: albums },
            { name: "Related Artist", list: relatedArtists },
          ]
        : undefined,
  };
}
