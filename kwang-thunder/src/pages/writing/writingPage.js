import React, { useState } from "react";
import Card from "../../ui/card";
import Title from "../../ui/title";
import classes from "../../css/writing.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function WritingPage() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <Card className={classes.titleField}>
        <Title />
      </Card>
      <Card className={classes.inputField}>
        <h1 className={classes.title}>쾅번개하기</h1>
        <form className={classes.form}>
          <input
            className={classes.contentTitle}
            type="text"
            data-min-width="60"
            data-min-height="30"
            data-text-content="true"
            placeholder="제목을 입력해주세요."
            style={{ color: (94, 94, 94) }}
          />
          <div className={classes.typeAndPeople}>
            <label>
              분야를 선택해주세요 :
              <select className={classes.contentType} name="분야">
                <option value="study">공부</option>
                <option value="exercise">운동</option>
                <option value="meal">밥</option>
                <option value="culture">문화생활</option>
                <option value="etc">기타</option>
              </select>
            </label>
            <input
              className={classes.contentPeople}
              type="number"
              data-min-width="30"
              data-min-height="30"
              data-text-content="true"
              placeholder="모집 인원을 정해 주세요."
              style={{ color: (94, 94, 94) }}
            />
          </div>
          <input
            className={classes.contentLink}
            type="text"
            data-min-width="30"
            data-min-height="30"
            data-text-content="true"
            placeholder="오픈채팅방 링크를 올려주세요."
            style={{ color: (94, 94, 94) }}
          />
          <div className={classes.dateAndTime}>
            <label className={classes.contentDate}>
              번개 날짜를 골라주세요:
              <input
                className={classes.datePicker}
                type="date"
                required
                pattern="\d{4}-d{2}-d{2}"
              />
            </label>
            <label className={classes.contentTime}>
              번개 시간을 골라주세요:
              <input
                type="time"
                data-min-width="30"
                data-min-height="30"
                data-text-content="true"
                placeholder="13:10:20"
                style={{ color: (94, 94, 94) }}
              />
            </label>
          </div>
          <textarea
            className={classes.contentText}
            data-min-width="100"
            data-min-height="100"
            data-text-content="true"
            placeholder="세부 내용을 입력해주세요."
            style={{ color: (94, 94, 94) }}
          />
        </form>
        <button className={classes.submitBtn}>글쓰기</button>
      </Card>
    </>
  );
}

export default WritingPage;
