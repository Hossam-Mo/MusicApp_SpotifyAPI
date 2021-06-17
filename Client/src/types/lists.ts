import tracks from "./tracks";

export default interface lists {
  name: string;
  imgUrl: string;
  description?: string;
  type: string;
  items: { added_at: string; track: tracks[] };
}
