import artists from "./artists";

export default interface album {
  album_type: string;
  artists: artists[];
  id: string;
  name: string;
  type: string;
  total_tracks: number;
  release_date: string;
}
