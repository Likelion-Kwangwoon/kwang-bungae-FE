import React from "react";
import "../css/contentsCard.css";

function contentsCard(props) {
  return (
    <div>
      <a
        href=""
        title="Button border blue/green"
        className="button btnFloat btnBlueGreen"
      >
        {props.content}
      </a>
    </div>
  );
}

export default contentsCard;
