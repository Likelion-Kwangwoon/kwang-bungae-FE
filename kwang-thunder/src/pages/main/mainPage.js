import React from "react";
import Card from "../../ui/card";
import Title from "../../ui/title";
import ContentsCard from "../../ui/contentsCard";
import Search from "../../ui/search";
import MainCard from "../../ui/mainCard";
import Prenext from "../../ui/prenext";
import classes from "../../css/mainPage.module.css";
import WritingButton from "../../ui/writingButton";

function mainPage() {
  return (
    <>
      <Card>
        <Title />
      </Card>
      <Card className={classes.filters_fields}>
        <ContentsCard content="공부" />
        <ContentsCard content="운동" />
        <ContentsCard content="밥" />
        <ContentsCard content="기타" />

        <Search />
      </Card>
      <Card className={classes.contents_fields}>
        <div className={classes.contents_search}></div>
        <div className={classes.contents}>
          <MainCard />
          <MainCard />
          <MainCard />
        </div>
        <div className={classes.preNext}>
          <Prenext />
        </div>
      </Card>
      <WritingButton />
    </>
  );
}

export default mainPage;
