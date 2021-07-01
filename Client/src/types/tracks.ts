import album from "./albums";

export default interface tracks {
  album?: album;
  id: string;
  name: string;
  duration_ms: number;
  type?: string;
  number?: string | number;
  preview_url?: string;
}
