import React, { useEffect, useState } from "react";
import Title from "../../ui/title";
import Card from "../../ui/card";
import axios from "axios";
import classes from "../../css/myPage.module.css";
import { Link } from "react-router-dom";
function MyPage() {
  // TODO : 백엔드에서 내가 작성한 댓글 호출시에 해당 게시글의 링크도 주세요.
  const TEMP_TOKEN = localStorage.getItem("token");
  const [myComments, setMyComments] = useState([]);
  const [myPosts, setMyPosts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        await axios
          .get("http://34.64.180.211:8080/post/list/member", {
            headers: {
              Authorization: `Bearer ${TEMP_TOKEN}`,
            },
          })
          .then((response) => {
            setMyPosts(response.data);
          });
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);
  useEffect(() => {
    const getComment = async () => {
      try {
        await axios
          .get("http://34.64.180.211:8080/comment/list/member", {
            headers: {
              Authorization: `Bearer ${TEMP_TOKEN}`,
            },
          })
          .then((response) => {
            setMyComments(response.data);
          });
      } catch (e) {
        console.log(e);
      }
    };
    getComment();
  }, []);
  return (
    <>
      <Card>
        <Title />
      </Card>
      <Card className={classes.section}>
        <div className={classes.myPosts}>
          <h1>내가 작성한 글</h1>
        </div>
        <div className={classes.myPostContents}>
          <ul style={{ paddingLeft: "1rem", paddingRight: "1rem" }}>
            {myPosts &&
              myPosts.map((myPost) => {
                return (
                  <Link
                    onClick={() => {
                      window.location.href = `http://localhost:3000/post/${myPost.postId}`;
                    }}
                    style={{ textDecoration: "none" }}
                  >
                    <li style={{ borderBottom: "1px solid grey" }}>
                      {myPost.dday} {myPost.title}
                    </li>
                  </Link>
                );
              })}
          </ul>
        </div>
        <div className={classes.myComments}>
          <h1>내가 작성한 댓글</h1>
        </div>
        <div className={classes.myCommentContents}>
          <ul>
            {myComments &&
              myComments.map((myComment) => {
                <li>
                  {myComment.datetime}, {myComment.content}
                </li>;
                return <li>{myComment.content}</li>;
              })}
          </ul>
        </div>
      </Card>
    </>
  );
}

export default MyPage;
