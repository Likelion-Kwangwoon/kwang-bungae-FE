import React from "react";
import Card from "react-bootstrap/Card";

const Dummy = [
  { title: "카공할 사람!!", subTitle: "3월 25일 19시", type: "공부" },
  { title: "밥 먹을 사람!!", subTitle: "3월 27일 11시", type: "밥" },
  { title: "운동할 사람!!", subTitle: "3월 28일 17시", type: "운동" },
];

const postsList = Dummy.map((post) => (
  <Card style={{ width: "18rem", height: "18rem", margin: "1rem" }}>
    <Card.Body>
      <Card.Title>{post.title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{post.subTitle}</Card.Subtitle>
      <button>#{post.type}</button>
    </Card.Body>
  </Card>
));

function mainCard() {
  //mainpage에서 보이는 포스트들
  return <>{postsList}</>;
}

/* <Card style={{ width: "18rem", height: "18rem", margin: "15px" }}>
      <Card.Body>
        <Card.Title>카공할사람!!</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">3월 25일 19시</Card.Subtitle>
        {/* 백엔드에서 데이터 가져오기 */

//   <Card.Text>카공할사람 있나요?! 내일 저녁 7시!</Card.Text>
//   <button></button>
// </Card.Body>
// </Card> */}

export default mainCard;
