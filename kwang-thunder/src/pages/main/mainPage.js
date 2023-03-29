import React, { useState, useEffect } from "react";
import Card from "../../ui/card";
import Title from "../../ui/title";
import ContentsCard from "../../ui/contentsCard";
import Search from "../../ui/search";
import MainCard from "../../ui/mainCard";
import classes from "../../css/mainPage.module.css";
import Talk from "../../images/Talk.png";
import WritingButton from "../../ui/writingButton";
import Paging from "../paging/paging";

function MainPage() {
  //   const [items,setItems]=useState([]); => 리스트에 잇는 넘들
  //   const [count,setCount]=useState([]); =>총개수
  //   const [currentpage,setCurrentpage] = useState([1]); =>지금 페이지
  //   const [postPerPage] = useState(16); => 페이지에 나타낼 놈들

  //   const [indexOfLastPost, setIndexOfLastPost] = useState(0);
  //   const [indexOfFirsttPost, setIndexOfFirstPost] = useState(0);
  //   const [currentPosts, setCurrentPosts] = useState(0);
  //   React.useEffect(() => {
  //   setCount(items.length);
  //   setIndexOfLastPost(currentpage * postPerPage);
  //   setIndexOfFirstPost(indexOfLastPost - postPerPage);
  //   setCurrentPosts(items.slice(indexOfFirstPost, indexOfLastPost));
  // }, [currentpage, indexOfFirstPost, indexOfLastPost, items, postPerPage]);
  // const setPage = (e) => {
  //   setCurrentpage(e);
  // };

  const [category, setCategory] = useState("all");
  const [isAuth, setAuth] = useState(false);
  const REST_API_KEY = "7c749d6829ffb31f2015c71640b42eb4";
  const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
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
    window.localStorage.removeItem("token");
    setAuth(false);
    if (!window.Kakao.Auth.getAccessToken()) {
      console.log("Not logged in.");
      return;
    }
    //로그아웃 함수 호출 전 토큰이 있는지 확인해 보는 소스코드
    // console.log("로그아웃 전 토큰:", window.Kakao.Auth.getAccessToken());
    // window.Kakao.Auth.logout()
    //   .then((response) => {
    //     console.log(response);
    //     console.log(
    //       "logout ok access token -> " + window.Kakao.Auth.getAccessToken()
    //     );
    //   })
    //   .catch(function () {
    //     alert("Not logged in");
    //   });
  };

  return (
    <>
      <Card className={classes.title}>
        <Title />
        {!isAuth && (
          <a className={classes.kakaologin} href={KAKAO_AUTH_URL}>
            <img src={Talk} />
            카카오 계정으로 로그인
          </a>
        )}
        {isAuth && (
          <a
            className={classes.kakaologout}
            href={KAKAO_AUTH_URL}
            onClick={logoutHandler}
          >
            로그아웃
          </a>
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
        <Paging />
      </Card>
    </>
  );
}

export default MainPage;
