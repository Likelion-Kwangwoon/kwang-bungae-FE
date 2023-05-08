import React from "react";
import classes from "../css/contentsCard.module.css";

function contentsCard(props) {
  const handleCategoryChange = (event) => {
    const clickedCategory = event.target.innerText;
    switch (clickedCategory) {
      case "전체보기":
        props.onClick("all");
        break;
      case "공부":
        props.onClick("study");
        break;
      case "운동":
        props.onClick("exercise");
        break;
      case "밥":
        props.onClick("food"); // food는 테스트용, 원래는 meal
        break;
      case "게임":
        props.onClick("play"); // play는 테스트용, 원래는 game
        break;
      case "문화생활":
        props.onClick("culture");
        break;
      case "기타":
        props.onClick("etc");
        break;
      default:
        break;
    }
  };

  return (
    <div className={classes.btnFloat} onClick={handleCategoryChange}>
      {props.content}
    </div>
  );
}

export default contentsCard;
