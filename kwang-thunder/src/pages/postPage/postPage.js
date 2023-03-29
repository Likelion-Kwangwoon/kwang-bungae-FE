import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../ui/card";
import classes from "../../css/postpage.module.css";
import swal from "sweetalert";
import Title from "../../ui/title";
import { useLocation } from "react-router-dom";
function PostPage() {
  const location = useLocation();
  const [comment, setComment] = useState("");
  const [commentArray, setCommentArray] = useState([]); //댓글이 모아진 곳들
  const [cards, setCards] = useState([]);
  // useEffect(() => {
  //   const postId = location.pathname.substr(6);
  //   const getCards = async () => {
  //     try {
  //       const cardList = await axios
  //         .get(
  //           "https://1c163030-febb-40eb-ad08-95b9a0693d06.mock.pstmn.io/post/detail?postId=1",
  //           { params: postId }
  //         )
  //         .then(function (response) {
  //           setCards(response.data);
  //         });
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   getCards();
  // }, []);
  const dummy = {
    postId: 3,
    title: "코노 ㄱ??",
    people: 15,
    dday: "2023-08-12-12:31",
    type: "play",
    link: "www.naver.com",
    content: "코노 갈사람!!!!!!!!!!!!?",
    profile:
      "http://k.kakaocdn.net/dn/EqRlJ/btr4tOoF0tH/1OVKEmCFfcw6aUGeRpTDhK/img_640x640.jpg",
    nickname: "춤추는 아기하마",
    comments: [
      {
        commentId: 1,
        content: "저 갈래요!",
        datetime: "2023-05-07-10:11",
        nickname: "우는 아기사자",
      },
      {
        commentId: 2,
        content: "저도 갈래요!",
        datetime: "2023-05-07-11:11",
        nickname: "신난 아기호랑이",
      },
      {
        commentId: 3,
        content: "저도 껴도 될까요...?!",
        datetime: "2023-05-07-12:11",
        nickname: "소심한 악어",
      },
    ],
  };

  const onSubmit = (event) => {
    event.preventDefault();
    swal("댓글 수정이 불가합니다.");
    if (comment.length > 0) {
      return;
    } else {
      swal("작성된 내용이 없습니다. ");
    }
    setCommentArray([...commentArray, comment]); //
    setComment("");
  };
  return (
    <>
      {/* <Card className={classes.title}>
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
      </Card> */}
      <Card>
        <Title />
      </Card>
      <Card>
        <h1>{dummy.title}</h1>
        <div>{dummy.nickname}</div>
        <div>{dummy.dday}</div>
        <hr />
        <ul>
          <li>
            <span>번개 분야</span>
            {dummy.type}
          </li>
          <li>
            <span>모집 인원</span>
            {dummy.people}
          </li>
          <li>
            <span>번개 일시</span>
            {dummy.dday}
          </li>
          <li>
            <span>세부 내용</span>
            {dummy.content}
          </li>
        </ul>
      </Card>
      <Card>
        <input
          type="text"
          className="usercomment"
          value={comment}
          placeholder="쾅번개모임에 궁금한 게 있다면 댓글로 작성해주세요!"
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="button" onClick={onSubmit}>
          버튼
        </button>
      </Card>
    </>
  );
}

export default PostPage;
