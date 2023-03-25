import React from "react";
import { useEffect } from "react";
import axios from "axios";
import qs from "qs";

const Auth = () => {
  const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
  const CLIENT_SECRET = "[5SX2wOqE1BgNG8s4BjDTIoFz7FgDKOeA]";
  const REST_API_KEY = "7c749d6829ffb31f2015c71640b42eb4";

  const code = new URL(window.location.href).searchParams.get("code");
  const getToken = async () => {
    const payload = qs.stringify({
      grant_type: "authorization_code",
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code: code,
      client_secret: CLIENT_SECRET,
    });
    try {
      const res = await axios.post(
        "https://kauth.kakao.com/oauth/token",
        payload
      );

      window.Kakao.init(REST_API_KEY);
      window.Kakao.Auth.setAccessToken(res.data.access_token);
      console.log(code);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getToken();
  }, []);
  return null;
};

export default Auth;
