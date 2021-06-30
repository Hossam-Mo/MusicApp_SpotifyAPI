import album from "./albums";

export default interface tracks {
  album: album;
  id: string;
  name: string;
  href?: string;
  duration: number;
  type: string;
}
