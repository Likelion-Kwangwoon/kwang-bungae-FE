import React, { useState, useEffect } from "react";
import Card from "../../ui/card";
import Title from "../../ui/title";
import classes from "../../css/writing.module.css";
import axios from "axios";
import swal from "sweetalert";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

function WritingPage() {
  const navigate = useNavigate();
  let member;
  const TEMP_TOKEN = localStorage.getItem("token");
  const [enteredTitle, setEnteredTitle] = useState();
  const [enteredPeople, setEnteredPeople] = useState();
  const [enteredLink, setEnteredLink] = useState();
  const [enteredDday, setEnteredDday] = useState();
  const [enteredTime, setEnteredTime] = useState();
  const [enteredContent, setEnteredContent] = useState();
  const [enteredType, setEnteredType] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const peopleChangeHandler = (event) => {
    setEnteredPeople(event.target.value);
  };
  const LinkChangeHandler = (event) => {
    setEnteredLink(event.target.value);
  };
  const DdayChangeHandler = (event) => {
    setEnteredDday(event.target.value);
  };
  const contentChangeHandler = (event) => {
    setEnteredContent(event.target.value);
  };
  const typeChangeHandler = (event) => {
    setEnteredType(event.target.value);
  };
  const timeChangeHandler = (event) => {
    setEnteredTime(event.target.value);
  };

  useEffect(() => {
    const dayTime = enteredDday + "-" + enteredTime;
    member = window.localStorage.getItem("token");
    if (!member) {
      swal("로그인 후 사용가능합니다.");
      navigate("/");
      return;
    }
    if (
      enteredTitle &&
      enteredPeople &&
      enteredLink &&
      dayTime &&
      enteredContent &&
      enteredType
    ) {
      setFormIsValid(true);
    }
  }, [
    enteredContent,
    enteredDday,
    enteredLink,
    enteredPeople,
    enteredTime,
    enteredType,
  ]);

  const submitHandler = async (event) => {
    event.preventDefault();
    const dayTime = enteredDday + "-" + enteredTime;
    const sendData = {
      title: enteredTitle,
      people: enteredPeople,
      link: enteredLink,
      content: enteredContent,
      //dday: { dayTime },
      // type: { enteredType },
      // memberId: { member },
    };
    await axios
      .post("http://34.64.180.211:8080/post/create", sendData, {
        headers: {
          Authorization: `Bearer ${TEMP_TOKEN}`,
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    navigate("/");
  };

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
            placeholder="제목을 입력해주세요(최대 50자)."
            maxLength={40}
            style={{ color: (94, 94, 94) }}
            onChange={titleChangeHandler}
          />
          <div className={classes.typeAndPeople}>
            <label>
              분야를 선택해주세요 :
              <select
                className={classes.contentType}
                name="분야"
                onChange={typeChangeHandler}
              >
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
              placeholder="모집 인원을 정해 주세요(최대 30명)."
              max={30}
              onChange={peopleChangeHandler}
              style={{ color: (94, 94, 94) }}
            />
          </div>
          <input
            className={classes.contentLink}
            type="url"
            data-min-width="30"
            data-min-height="30"
            data-text-content="true"
            placeholder="오픈채팅방 링크를 올려주세요."
            style={{ color: (94, 94, 94) }}
            minLength={23}
            onChange={LinkChangeHandler}
          />
          <div className={classes.dateAndTime}>
            <label className={classes.contentDate}>
              번개 날짜를 골라주세요:
              <input
                onChange={DdayChangeHandler}
                className={classes.datePicker}
                type="date"
                // max={yyyy - mm - dd}
              />
              {/* date변수를만들고 현재시간을가져오고 3일더해서 max값으로 설정 */}
            </label>
            <label className={classes.contentTime}>
              번개 시간을 골라주세요:
              <input
                type="time"
                data-min-width="30"
                data-min-height="30"
                data-text-content="true"
                placeholder="13:10:20"
                onChange={timeChangeHandler}
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
            minLength={1}
            style={{ color: (94, 94, 94) }}
            onChange={contentChangeHandler}
          />
        </form>
        <button
          disabled={!formIsValid}
          className={classes.submitBtn}
          onClick={submitHandler}
        >
          글쓰기
        </button>
      </Card>
    </>
  );
}

export default WritingPage;
