import React, { useEffect, useState } from "react";
import Title from "../../ui/title";
import Card from "../../ui/card";
import swal from "sweetalert2";
import axios from "axios";
import classes from "../../css/myPage.module.css";

function MyPage() {
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        await axios
          .get(
            "https://aae6c754-9791-46c8-a805-4d38ac740450.mock.pstmn.io/mypage/view/"
          )
          .then((response) => {
            console.log(response.data);
            setDataList(response.data);
            console.log(dataList);
          });
      } catch (e) {
        console.log(e);
      }
    };
    getData();
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
          <ul>{}</ul>
        </div>
        <div className={classes.myComments}>
          <h1>내가 작성한 댓글</h1>
        </div>
        <div className={classes.myCommentContents}>
          <ul>{}</ul>
        </div>
      </Card>
    </>
  );
}

export default MyPage;
