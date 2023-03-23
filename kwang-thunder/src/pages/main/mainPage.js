import React from "react";
import Card from "../../ui/card";
import Title from "../../ui/title";
import ContentsCard from "../../ui/contentsCard";
import Search from "../../ui/search";
import MainCard from "../../ui/mainCard";
import Prenext from "../../ui/prenext";
import classes from "../../css/mainPage.module.css";

function mainPage() {
  return (
    <>
      <Card>
        <Title />
      </Card>
      <Card className={classes.contents_section}>
        <div className={classes.contents_fields}>
          <ContentsCard content="공부" />
          <ContentsCard content="운동" />
          <ContentsCard content="밥" />
          <ContentsCard content="기타" />

          <Search />
        </div>
        <div className={classes.contents_search}></div>
        <div className={classes.contents}>
          <MainCard />
        </div>
        <Prenext />
      </Card>
    </>
  );
}

export default mainPage;
