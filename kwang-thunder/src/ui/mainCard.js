import React from "react";
import Card from "react-bootstrap/Card";

function mainCard() {
  //mainpage에서 보이는 포스트들
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>카드 제목</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">카드 부제목</Card.Subtitle>
        <Card.Text>카드 본문 텍스트입니다.</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default mainCard;
