import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../ui/card";
import classes from "../../css/postpage.module.css";
import swal from "sweetalert2";
import Title from "../../ui/title";
import { useLocation, useNavigate } from "react-router-dom";
function PostPage() {
  const Token = "token";
  const navigate = useNavigate();
  const location = useLocation();
  const [comment, setComment] = useState("");
  const [cards, setCards] = useState([]);
  const [isWriter, setIsWriter] = useState("");
  useEffect(() => {
    const postId = location.pathname.substr(6);
    setIsWriter("abc");
    const getCards = async () => {
      try {
        const cardList = await axios
          .get(
            "https://aae6c754-9791-46c8-a805-4d38ac740450.mock.pstmn.io/post/detail?postId=2",
            {
              params: { params: postId },
              headers: { Authorization: localStorage.getItem("token") },
            }
          )
          .then(function (response) {
            console.log(response.data);
            setCards(response.data);
            // setIsWriter(response.data.writer);
          });
      } catch (e) {
        console.log(e);
      }
    };
    getCards();
  }, []);

  // {
  //   "commentId": 3,
  //   "content": "저도 껴도 될까요...?!",
  //   "datetime": "2023-05-07-12:11",
  //   "nickname": "소심한 악어"
  //   "memberId" : "abc",
  // }

  // const dummy = {
  //   postId: 3,
  //   title: "코노 ㄱ??",
  //   people: 15,
  //   dday: "2023-08-12-12:31",
  //   type: "play",
  //   link: "www.naver.com",
  //   content: "코노 ㄱㄱ??",
  //   profile:
  //     "http://k.kakaocdn.net/dn/EqRlJ/btr4tOoF0tH/1OVKEmCFfcw6aUGeRpTDhK/img_640x640.jpg",
  //   nickname: "춤추는 아기하마",
  //   memberId: "abc",
  //   comments: [
  //     {
  //       commentId: 1,
  //       content: "저 갈래요!",
  //       datetime: "2023-05-07-10:11",
  //       nickname: "우는 아기사자",
  //     },
  //     {
  //       commentId: 2,
  //       content: "저도 갈래요!",
  //       datetime: "2023-05-07-11:11",
  //       nickname: "신난 아기호랑이",
  //     },
  //     {
  //       commentId: 3,
  //       content: "저도 껴도 될까요...?!",
  //       datetime: "2023-05-07-12:11",
  //       nickname: "소심한 악어",
  //     },
  //   ],
  // };

  const openLinkHandler = () => {
    navigate(`${cards.link}`);
  };
  const onSubmit = (event) => {
    if (comment.length > 0) {
      setComment(comment);
      swal
        .fire({
          title: "댓글 수정이 불가합니다. 등록하시겠습니까?",
          showDenyButton: true,
          confirmButtonText: "예",
          denyButtonText: `아니요`,
        })
        .then(async (result) => {
          if (result.isConfirmed) {
            swal.fire("등록됐습니다!", "success!");
            const sendData = {
              postID: cards.postId,
              content: comment,
              datetime: cards.dday,
            };
            await axios
              .post(
                "https://aae6c754-9791-46c8-a805-4d38ac740450.mock.pstmn.io/comment/crete/",
                JSON.stringify(sendData)
                // 댓글 작성자도 넣어줘야함!
              )
              .then((response) => {
                console.log(response);
              })
              .catch((error) => {
                console.log(error);
              });
          } else {
            swal.fire("취소됐습니다!", "cancel!");
          }
        });
      return;
    } else {
      swal.fire("작성된 내용이 없습니다.");
    }
  };
  const onRemove = (event) => {
    event.preventDefault();
    swal
      .fire({
        title: "정말 삭제하시겠습니까?",
        showDenyButton: true,
        confirmButtonText: "예",
        denyButtonText: `아니요`,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swal.fire("삭제됐습니다!", "success");
        } else {
          swal.fire("취소됐습니다!", "canceled");
        }
      });
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
          <h1 className={classes.posterTitle}>{cards.title}</h1>
          <div className={classes.nickAndDday}>
            <p style={{ fontWeight: "bold" }}>{cards.nickname}</p>
            <p style={{ fontWeight: "bold" }}>{cards.dday}</p>
          </div>
        </div>
        <ul className={classes.midSection}>
          <li className={classes.bungaeField}>
            <span>번개 분야</span>
            {cards.type}
          </li>
          <li className={classes.bungaePeople}>
            <span>모집 인원</span>
            {cards.people}
          </li>
          <li className={classes.bungaeDate}>
            <span>번개 일시</span>
            {cards.dday}
          </li>
          <li className={classes.bungaeContent}>
            <span>세부 내용</span>
            <div className={classes.contentBox}>{cards.content}</div>
          </li>
        </ul>

        {window.localStorage.getItem("primaryKey") === isWriter && (
          <button onClick={onRemove}>삭제하기</button>
        )}
        {!(window.localStorage.getItem("primaryKey") === isWriter) && (
          <button
            onClick={() => {
              window.location.href = `https://${cards.link}`;
            }}
          >
            참가하기
          </button>
        )}
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
            {cards.comments &&
              cards.comments.map((comment, index) => {
                return (
                  <>
                    <div className={classes.comment}>
                      <div className={classes.commentInfo}>
                        <li className={classes.commentNick} key={index}>
                          {comment.nickname}
                        </li>
                        <li>{comment.datetime}</li>
                      </div>
                      <li
                        className={classes.commentContent}
                        key={comment.commentId}
                      >
                        {comment.content}
                      </li>
                    </div>
                  </>
                );
              })}
          </ul>
        </div>
      </Card>
    </>
  );
}

export default PostPage;
