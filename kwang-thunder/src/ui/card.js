import React from "react";
import classes from "../css/card.module.css";

const card = (props) => {
  // 흰 바탕에 그림자 있는 wrapper component. 다른 컴포넌트를 감싸는 용도로 사용해주세요.
  return <div className={classes.card}>{props.children}</div>;
};

export default card;
