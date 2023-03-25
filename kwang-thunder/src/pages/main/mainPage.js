import React, { useState } from "react";
import Card from "../../ui/card";
import Title from "../../ui/title";
import ContentsCard from "../../ui/contentsCard";
import Search from "../../ui/search";
import MainCard from "../../ui/mainCard";
import Prenext from "../../ui/prenext";
import classes from "../../css/mainPage.module.css";
import WritingButton from "../../ui/writingButton";

function MainPage() {
  // const [category, setCategory] = useState("all");
  // const clickCategory = (target) => {
  //   switch (target) {
  //     case "all":
  //       return setCategory("all");
  //     case "study":
  //       return setCategory("study");
  //     case "exercise":
  //       return setCategory("exercise");
  //     case "meal":
  //       return setCategory("meal");
  //     case "game":
  //       return setCategory("game");
  //     case "culture":
  //       return setCategory("culture");
  //     case "etc":
  //       return setCategory("etc");
  //   }
  //   console.log(category);
  // };

  return (
    <>
      <Card>
        <Title />
      </Card>
      <Card className={classes.filters_fields}>
        <ContentsCard content="전체보기" />
        <ContentsCard content="공부" />
        <ContentsCard content="운동" />
        <ContentsCard content="밥" />
        <ContentsCard content="게임" />
        <ContentsCard content="문화생활" />
        <ContentsCard content="기타" />
        <Search />
      </Card>
      <Card className={classes.contents_fields}>
        <div className={classes.contents_search}></div>
        <div className={classes.contents}>
          <MainCard category="all" />
        </div>
        <div className={classes.preNext}>
          <Prenext />
        </div>
      </Card>
      <WritingButton />
    </>
  );
}

export default MainPage;
