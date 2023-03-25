import React from "react";
import Today from "./today";
import lightning from "../images/light_logo.png";
import classes from "../css/title.module.css";
import Talk from "./../images/Talk.png";
function Title() {
  const REST_API_KEY = "7c749d6829ffb31f2015c71640b42eb4";
  const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  return (
    <div className={classes.title}>
      <a href="/">
        <img
          className={classes.titleImage}
          alt="lightning_logo"
          src={lightning}
        />
      </a>
      <Today />
      <a className={classes.kakaologin} href={KAKAO_AUTH_URL}>
        <img src={Talk} />
        {/*카카오 계정으로 시작하기*/}
      </a>
    </div>
  );
}

export default Title;
