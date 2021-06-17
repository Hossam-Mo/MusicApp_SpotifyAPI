import images from "./images";
import tracks from "./tracks";

export default interface lists {
  name: string;
  images: images[];
  description?: string;
  type: string;
  items: { added_at: string; track: tracks[] };
}
