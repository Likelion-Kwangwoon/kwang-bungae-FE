import { useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";
const Auth = () => {
  const navigate = useNavigate();
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
  const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;

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
      function sendToken() {
        axios
          .get(
            "https:aae6c754-9791-46c8-a805-4d38ac740450.mock.pstmn.io/user/auth?code=ABFASDASDASD",
            { code: { code } }
          )
          .then((response) => {
            window.localStorage.setItem("token", response.data.token.access);
            window.localStorage.setItem(
              "nickname",
              response.data.user.nickname
            );
            window.localStorage.setItem("primaryKey", "abc");
            navigate(`/`);
          })
          .catch((error) => {
            console.error(error);
            navigate(`/`);
          });
      }
      sendToken();
    } catch (err) {
      console.log(err);
      navigate(`/`);
    }
  };
  useEffect(() => {
    getToken();
  }, []);
  return null;
};

export default Auth;
