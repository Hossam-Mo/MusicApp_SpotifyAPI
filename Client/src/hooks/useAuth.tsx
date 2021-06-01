import axios from "axios";
import React, { useEffect, useState } from "react";


const code = new URLSearchParams(window.location.search).get("code");
const homelink: any = "/";

export default function useAuth() {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [expiresIn, setExpiresIn] = useState<number | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);

  useEffect(() => {
    console.log(code);

    axios
      .post("http://localhost:5000/login", { code: code })
      .then((r) => {
        console.log(r);

        setAccessToken(r.data.accessToken);
        setExpiresIn(r.data.expiresIn);
        setRefreshToken(r.data.refreshToken);
      })
      .catch((err) => {
        console.log(err);
        window.location = homelink;
      });
  }, []);

  return accessToken;
}
