import React from "react";
import classes from "../css/card.module.css";

const Card = (props) => {
  // 흰 바탕에 그림자 있는 wrapper component. 다른 컴포넌트를 감싸는 용도로 사용해주세요.
  // ex) return <Card>{contents}</Card>
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
