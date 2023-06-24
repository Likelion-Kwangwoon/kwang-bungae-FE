import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../ui/card";
import classes from "../../css/postpage.module.css";
import swal from "sweetalert2";
import Title from "../../ui/title";
import { useLocation, useNavigate } from "react-router-dom";
function PostPage() {
  const TEMP_TOKEN = localStorage.getItem("token");
  const navigate = useNavigate();
  const location = useLocation();
  const [comment, setComment] = useState(""); // 작성한 댓글
  const [cards, setCards] = useState([]);
  const [isWriter, setIsWriter] = useState("");
  const [getComment, setGetComment] = useState(""); // 댓글 목록
  const [timer, setTimer] = useState("");
  // TODO : 백엔드에서 댓글 작성시에 시간을 저장하고, 댓글 호출시에 시간도 주세용.
  useEffect(() => {
    const postId = location.pathname.substr(6);
    setIsWriter("abc");
    const getCards = async () => {
      try {
        const cardList = await axios
          .get("http://34.64.180.211:8080/post/detail", {
            params: { postId },
            headers: { Authorization: `Bearer ${TEMP_TOKEN}` },
          })
          .then(function (response) {
            setCards(response.data);
          });
      } catch (e) {
        console.log(e);
      }
    };
    getCards();
  }, []);

  useEffect(() => {
    const postId = location.pathname.substr(6);
    setIsWriter("abc");
    const getComment = async () => {
      try {
        const cardList = await axios
          .get("http://34.64.180.211:8080/comment/list", {
            params: { postId },
            headers: { Authorization: `Bearer ${TEMP_TOKEN}` },
          })
          .then(function (response) {
            setGetComment(response.data);
          });
      } catch (e) {
        console.log(e);
      }
    };
    getComment();
  }, []);

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
              postId: cards.postId,
              memberId: "",
              content: comment,
            };
            await axios
              .post("http://34.64.180.211:8080/comment/create", sendData, {
                headers: {
                  Authorization: `Bearer ${TEMP_TOKEN}`,
                },
              })
              .then((response) => {
                console.log(response);
                window.location.reload();
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
            {getComment &&
              getComment.map((comment, index) => {
                return (
                  <>
                    <div className={classes.comment} key={getComment.commentId}>
                      <div className={classes.commentInfo}>
                        <li className={classes.commentNick} key={index}>
                          {getComment[index].memberId}
                        </li>
                        <li>{"DATETIME"}</li>
                      </div>
                      <li className={classes.commentContent}>
                        {getComment[index].content}
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
