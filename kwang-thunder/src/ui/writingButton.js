import React from "react";
import styles from "../css/writingButton.css";

function writingButton() {
  const handleScroll = () => {
    if (!window.scrollY) return;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.topBtn_wrap}>
      <button className={styles.topBtn} onClick={handleScroll}>
        <span>글작성</span>
      </button>
    </div>
  );
}

export default writingButton;
