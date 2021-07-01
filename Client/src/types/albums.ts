import artists from "./artists";
import images from "./images";
import tracks from "./tracks";

export default interface album {
  artists: artists[];
  id: string;
  name: string;
  type: string;
  total_tracks: number;
  release_date: string;
  images: images[];
  tracks: { herf: string; items: tracks[] };
}
