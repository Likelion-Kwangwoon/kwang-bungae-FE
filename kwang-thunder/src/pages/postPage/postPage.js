import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../ui/card";
import classes from "../../css/postpage.module.css";
import swal from "sweetalert";
import Title from "../../ui/title";
import { Link, useLocation, useNavigate } from "react-router-dom";
function PostPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [comment, setComment] = useState("");
  const [cards, setCards] = useState([]);
  // useEffect(() => {
  //   const postId = location.pathname.substr(6);
  //   const getCards = async () => {
  //     try {
  //       const cardList = await axios
  //         .get(
  //           "https://aae6c754-9791-46c8-a805-4d38ac740450.mock.pstmn.io/post/detail?postId=2",
  //           {
  //             params: { params: postId },
  //             headers: { Authorization: localStorage.getItem("token") },
  //           }
  //         )
  //         .then(function (response) {
  //           setCards(response.data);
  //           console.log(response.data.comments);
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
    content: "코노 ㄱㄱ??",
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

  const openLinkHandler = () => {
    navigate(`${dummy.link}`);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    swal("댓글 수정이 불가합니다. 등록하시겠습니까?");
    if (comment.length > 0) {
      setComment("");
      return;
    } else {
      swal("작성된 내용이 없습니다. ");
    }
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
      <Card className={classes.postInfo}>
        <div className={classes.topSection}>
          <h1 className={classes.posterTitle}>{dummy.title}</h1>
          <div className={classes.nickAndDday}>
            <p style={{ fontWeight: "bold" }}>{dummy.nickname}</p>
            <p style={{ fontWeight: "bold" }}>{dummy.dday}</p>
          </div>
        </div>
        <ul className={classes.midSection}>
          <li className={classes.bungaeField}>
            <span>번개 분야</span>
            {dummy.type}
          </li>
          <li className={classes.bungaePeople}>
            <span>모집 인원</span>
            {dummy.people}
          </li>
          <li className={classes.bungaeDate}>
            <span>번개 일시</span>
            {dummy.dday}
          </li>
          <li className={classes.bungaeContent}>
            <span>세부 내용</span>
            <div className={classes.contentBox}>{dummy.content}</div>
          </li>
        </ul>

        <button
          onClick={() => {
            window.location.href = `https://${dummy.link}`;
          }}
        >
          참가하기
        </button>
      </Card>
      <Card>
        <div className={classes.commentField}>
          <div className={classes.writeComment}>
            <input
              style={{ marginRight: "0.5rem" }}
              type="text"
              className={classes.commentInput}
              value={comment}
              placeholder="쾅번개모임에 궁금한 게 있다면 댓글로 작성해주세요!"
              onChange={(e) => setComment(e.target.value)}
            />
            <button type="button" onClick={onSubmit}>
              작성하기
            </button>
          </div>

          <ul style={{ padding: "0" }}>
            {dummy.comments.map((comment) => {
              return (
                <div className={classes.comment}>
                  <div className={classes.commentInfo}>
                    <li className={classes.commentNick} key={comment.commentId}>
                      {comment.nickname}
                    </li>
                    <li key={comment.commentId}>{comment.datetime}</li>
                  </div>
                  <li
                    className={classes.commentContent}
                    key={comment.commentId}
                  >
                    {comment.content}
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </Card>
    </>
  );
}

export default PostPage;

/* 
const DBcomment = () => {
    axios.post (
      "https://aae6c754-9791-46c8-a805-4d38ac740450.mock.pstmn.io/comment/crete/",
      JSON.stringfy({postID:comment.ID, content:comment.content, datetime:comment.datetime}))
      .then((response)=>{
        console.log(response);
      })
      .catch((error)=>{
        console.log(error);
      }) 
  }
  
*/
