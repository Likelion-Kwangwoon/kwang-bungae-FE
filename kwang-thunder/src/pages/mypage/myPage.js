import React, { useEffect, useState } from "react";
import Title from "../../ui/title";
import Card from "../../ui/card";
import axios from "axios";
import classes from "../../css/myPage.module.css";
import { Link } from "react-router-dom";
function MyPage() {
  const [myComments, setMyComments] = useState([]);
  const [myPosts, setMyPosts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        await axios
          .get("http://34.64.180.211:8080/post/list/member", {
            headers: {
              Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ0ZXN0IiwiaWF0IjoxNjgzNjI4ODQ5LCJleHAiOjE2ODM2NjQ4NDksInN1YiI6ImNoczk4NDEyQG5hdmVyLmNvbSIsIm5pY2tuYW1lIjoi7LWc7ZiB7IicIiwidWlkIjoiY2hzOTg0MTJAbmF2ZXIuY29tIiwicGxhdGZvcm0iOiJrYWthbyJ9.D9Hn0E_XiI--_EzuDmadQd_SeLTaa961ANgtgVkJHhA`,
            },
          })
          .then((response) => {
            console.log(response.data);
            setMyPosts(response.data.mypage);
          });
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);
  useEffect(() => {
    console.log(myComments);
    console.log(myPosts);
  }, [myComments, myPosts]);

  // const dummy = {
  //   mypage: [
  //     {
  //       postId: 1,
  //       title: "우리 같이 벚꽃 볼래?",
  //       people: 555,
  //       dday: "2023-05-07-12:31",
  //       type: "play",
  //       content: "hello world!, 우리 같이 벚꽃 볼래?",
  //     },
  //     {
  //       postId: 2,
  //       title: "피시방 ㄱ??",
  //       people: 5,
  //       dday: "2023-04-12-12:31",
  //       type: "play",
  //       content: "쓰리팝 ㄱㄱ??",
  //     },
  //     {
  //       postId: 3,
  //       title: "코노 ㄱ??",
  //       people: 15,
  //       dday: "2023-08-12-12:31",
  //       type: "play",
  //       content: "코노 ㄱㄱ??",
  //     },
  //     {
  //       postId: 4,
  //       title: "닭갈비 ㄱ??",
  //       people: 11,
  //       dday: "2023-03-12-12:31",
  //       type: "food",
  //       content: "닭갈비 ㄱㄱ??",
  //     },
  //     {
  //       postId: 5,
  //       title: "볼링 ㄱㄱ?",
  //       people: 7,
  //       dday: "2023-07-12-12:31",
  //       type: "play",
  //       content: "볼링 ㄱㄱ?",
  //     },
  //   ],
  //   mycomment: [
  //     {
  //       content: "저 갈래요!",
  //       postId: 1,
  //     },
  //     {
  //       content: "저도 갈래요!",
  //       postId: 3,
  //     },
  //     {
  //       content: "저도 껴도 될까요...?!",
  //       postId: 4,
  //     },
  //   ],
  // };

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
          <ul>
            {myPosts &&
              myPosts.map((myPost) => {
                return (
                  <Link
                    onClick={() => {
                      window.location.href = `http://localhost:3000/post/${myPost.postId}`;
                    }}
                    style={{ textDecoration: "none" }}
                  >
                    <li>
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
                // <li>{myComment.datetime}, {myComment.content}</li>
                return <li>{myComment.content}</li>;
              })}
          </ul>
        </div>
      </Card>
    </>
  );
}

export default MyPage;
