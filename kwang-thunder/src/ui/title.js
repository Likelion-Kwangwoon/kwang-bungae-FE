import React from "react";
import Today from "./today";
import lightning from "../images/light_logo.png";
import classes from "../css/title.module.css";
function Title() {
  return (
    <div className={classes.title}>
      <a href="/">
        <img
          className={classes.titleImage}
          alt="lightning_logo"
          src={lightning}
        />
      </a>
      <Today />
    </div>
  );
}

export default Title;
