import axios from "axios";
import { useEffect, useState } from "react";

const code = new URLSearchParams(window.location.search).get("code");

export default function useAuth() {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [expiresIn, setExpiresIn] = useState<number | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);

  useEffect(() => {
    if (code)
      axios
        .post("http://localhost:5000/login", { code: code })
        .then((r) => {
          setAccessToken(r.data.accessToken);
          setExpiresIn(r.data.expiresIn);
          setRefreshToken(r.data.refreshToken);
        })
        .catch(() => {
          window.location.replace("/");
        });
  }, []);

  return accessToken;
}
