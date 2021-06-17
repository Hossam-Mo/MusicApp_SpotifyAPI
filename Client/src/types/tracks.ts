import album from "./albums";
import images from "./images";

export default interface tracks {
  album: album;
  id: string;
  name: string;
  href: string;
  images: images[];
}
