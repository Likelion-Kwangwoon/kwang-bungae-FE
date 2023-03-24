import React from "react";
import Card from "./card.js";
import Today from "./today";
import lightning from "../images/light_logo.png";
import classes from "../css/title.module.css";

function Title() {
  return (
    <div className={classes.title}>
      <img
        className={classes.titleImage}
        alt="lightning_logo"
        src={lightning}
      />
      <Today />
    </div>
  );
}

export default Title;
