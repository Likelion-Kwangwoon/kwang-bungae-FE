import React, { useState } from "react";

function Today() {
  let today = new Date();
  let month = today.getMonth() + 1; // 월
  let date = today.getDate(); // 날짜
  let day = new Array("일", "월", "화", "수", "목", "금", "토");
  var today_num = new Date().getDay();
  let variable = day[today_num];
  return <div>오늘날짜:{`${month}월 ${date}일 ${variable}요일`}</div>;
}

export default Today;
