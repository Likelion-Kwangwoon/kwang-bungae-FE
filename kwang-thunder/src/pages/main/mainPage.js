import React from "react";
import Card from "../../ui/card";
import Today from "../../ui/today";
import Title from "../../ui/title";
import ContentsCard from "../../ui/contentsCard";

function mainPage() {
  return (
    <div>
      <Card>
        <Title />
        <Today />
      </Card>

      <div style={{ display: "flex" }}>
        <ContentsCard content="공부" />
        <ContentsCard content="운동" />
        <ContentsCard content="밥" />
        <ContentsCard content="기타" />
      </div>
    </div>
  );
} /*flex로 띄우기 => https://ingg.dev/flexbox/ 요고 함 봐볼까여 넵*/

export default mainPage;
