import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function useSecPage(id: string, type: string) {
  const [info, setInfo] = useState<any>(null);
  const [tracks, setTracks] = useState(null);
  const [albums, setAlbums] = useState(null);
  const [relatedArtists, setRelatedArtists] = useState(null);
  const [categoryLists, setCategoryLists] = useState(null);
  const [loading, setLoading] = useState(true);
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
            setLoading(false);
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
      } else if (type.toLowerCase() == "album") {
        Spotfiy.getAlbum(id)
          .then((res) => {
            let newTracks;
            newTracks = res.body.tracks.items.map((item) => {
              item["album"] = res.body;
              return item;
            });

            setInfo(res.body);
            setLoading(false);
            setTracks(newTracks);
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (type.toLowerCase() == "playlist") {
        Spotfiy.getPlaylist(id)
          .then((res) => {
            setInfo(res.body);
            setLoading(false);
            let newTrack = res.body.tracks.items.filter((item) => {
              if (item.track.album.images.length && item.track.id) {
                return item;
              }
            });

            newTrack = newTrack.map((item) => {
              return item.track;
            });
            setTracks(newTrack);
            /* console.log(
              res.body.tracks.items.map((item) => {
                if (item.track.album.images.length) return item.track;
              })
            ); */
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (type.toLowerCase() == "category") {
        Spotfiy.getCategory(id)
          .then((res) => {
            setInfo({
              name: res.body.name,
              id: res.body.id,
              type: "Category",
              images: [
                {
                  height: res.body.icons[0].height,
                  url: res.body.icons[0].url,
                  width: res.body.icons[0].width,
                },
              ],
            });
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
        Spotfiy.getPlaylistsForCategory(id)
          .then((res) => {
            setCategoryLists(res.body.playlists.items);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }

    return () => {
      setInfo(null);
      setTracks(null);
    };
  }, [id, type]);

  if (!info) return null;

  return {
    info,
    tracks: type.toLowerCase() === "category" ? undefined : tracks,
    lists:
      type.toLowerCase() === "artist"
        ? [
            { name: "Albums", list: albums },
            { name: "Related Artist", list: relatedArtists },
          ]
        : type.toLowerCase() === "category"
        ? [{ name: "PlayLists", list: categoryLists }]
        : null,
  };
}
