/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import Card from "../../ui/card";
import Title from "../../ui/title";
import ContentsCard from "../../ui/contentsCard";
import Search from "../../ui/search";
import MainCard from "../../ui/mainCard";
import classes from "../../css/mainPage.module.css";
import Talk from "../../images/Talk.png";
import WritingButton from "../../ui/writingButton";

function MainPage() {
  const [category, setCategory] = useState("all");
  const [isAuth, setAuth] = useState(false);
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  //const KAKAO_AUTH_URL = `http://34.64.180.211:8080/oauth2/authorization/kakao?redirect_uri=${REDIRECT_URI}`;
  const categoryChangeHandler = (newProp) => {
    setCategory(newProp);
  };
  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      setAuth(true);
    }
  }, []);

  const logoutHandler = () => {
    window.localStorage.clear();
    window.sessionStorage.clear();
    setAuth(false);
    if (!window.Kakao.Auth.getAccessToken()) {
      console.log("Not logged in.");
      return;
    }
  };

  return (
    <>
      <Card className={classes.title}>
        <Title />
        {/* {!isAuth && (
          <a className={classes.kakaologin} href={KAKAO_AUTH_URL}>
            <img src={Talk} />
            카카오 계정으로 로그인
          </a>
        )} */}
        {!isAuth && (
          <a
            id="custom-login-btn"
            href="http://34.64.180.211:8080/oauth2/authorization/kakao?redirect_uri=http://localhost:3000/redirect"
          >
            <img
              src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
              width="242"
            />
          </a>
        )}

        {isAuth && (
          <div className={classes.statemanage}>
            <a
              className={classes.kakaologout}
              href={`/`}
              onClick={logoutHandler}
            >
              로그아웃
            </a>
            <button
              className={classes.mypage}
              type="button"
              onClick={() => {
                window.location.assign("mypage");
              }}
            >
              마이 페이지
            </button>
          </div>
        )}
      </Card>
      <Card className={classes.filters_fields}>
        <ContentsCard onClick={categoryChangeHandler} content="전체보기" />
        <ContentsCard onClick={categoryChangeHandler} content="공부" />
        <ContentsCard onClick={categoryChangeHandler} content="운동" />
        <ContentsCard onClick={categoryChangeHandler} content="밥" />
        <ContentsCard onClick={categoryChangeHandler} content="게임" />
        <ContentsCard onClick={categoryChangeHandler} content="문화생활" />
        <ContentsCard onClick={categoryChangeHandler} content="기타" />
        <Search />
      </Card>
      <Card className={classes.contents_fields}>
        <div className={classes.contents_search}></div>
        <div className={classes.contents}>
          <MainCard category={category} />
        </div>
        <WritingButton />
      </Card>
    </>
  );
}
export default MainPage;
