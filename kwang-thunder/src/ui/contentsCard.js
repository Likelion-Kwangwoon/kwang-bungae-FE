import React from "react";
import classes from "../css/contentsCard.module.css";

function contentsCard(props) {
  return (
    <div className={classes.btnFloat}>
      <a
        href="#x"
        title="Button border blue/green"
        className="button btnFloat btnBlueGreen"
        style={{ textAlign: "center" }}
      >
        {props.content}
      </a>
    </div>
  );
}

export default contentsCard;
