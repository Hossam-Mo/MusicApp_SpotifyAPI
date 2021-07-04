import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function useAll(prames) {
  const Spotfiy = useSelector((state: any) => state.spotfiy);

  const [res, setRes] = useState<any>();

  useEffect(() => {
    if (Spotfiy && prames) {
      switch (prames) {
        case "Popular Artists": {
          Spotfiy.getArtists([
            "5WUlDfRSoLAfcVSX1WnrxN",
            "66CXWjxzNUsdJxJ2JdwvnR",
            "1uNFoZAHBGtllmzznpCI3s",
            "53XhwfbYqKCa1cC15pYq2q",
            "5ZsFI1h6hIdQRw2ti0hz81",
            "06HL4z0CvFAxyc27GXpf02",
            "7vk5e3vY1uw9plTHJAMwjN",
            "6M2wZ9GZgrQXHCFfjv46we",
            "7dGJo4pcD2V6oG8kP0tJRR",
            "1Xyo4u8uXC1ZmMpatF05PJ",
          ])
            .then((r: any) => {
              setRes(r.body.artists);
            })
            .catch((err: any) => {
              console.log(err);
            });
          return;
        }
        default:
          return;
      }
    }
  }, [Spotfiy]);

  return res;
}
