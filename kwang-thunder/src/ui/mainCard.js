import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { Link } from "react-router-dom";
import Paging from "../pages/paging/paging";

function MainCard(props) {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [idxNumber, setIdxnumber] = useState(1);
  // useEffect(() => {
  //   const getCards = async () => {
  //     try {
  //       const cardList = await axios
  //         .get(
  //           "https://aae6c754-9791-46c8-a805-4d38ac740450.mock.pstmn.io/post/list/"
  //         )
  //         .then(function (response) {
  //           setCards(response.data);
  //         });
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   getCards();
  // }, []);

  const dummy = [
    {
      postId: 1,
      title: "우리 같이 벚꽃 볼래?",
      people: 555,
      dday: "2023-05-07-12:31",
      type: "play",
      content: "hello world!, 우리 같이 벚꽃 볼래?",
    },
    {
      postId: 2,
      title: "피시방 ㄱ??",
      people: 5,
      dday: "2023-04-12-12:31",
      type: "play",
      content: "쓰리팝 ㄱㄱ??",
    },
    {
      postId: 3,
      title: "코노 ㄱ??",
      people: 15,
      dday: "2023-08-12-12:31",
      type: "play",
      content: "코노 ㄱㄱ??",
    },
    {
      postId: 4,
      title: "닭갈비 ㄱ??",
      people: 11,
      dday: "2023-03-12-12:31",
      type: "food",
      content: "닭갈비 ㄱㄱ??",
    },
    {
      postId: 5,
      title: "볼링 ㄱㄱ?",
      people: 7,
      dday: "2023-07-12-12:31",
      type: "play",
      content: "볼링 ㄱㄱ?",
    },
    {
      postId: 6,
      title: "볼링 ㄱㄱ?",
      people: 7,
      dday: "2023-07-12-12:31",
      type: "play",
      content: "볼링 ㄱㄱ?",
    },
    {
      postId: 7,
      title: "볼링 ㄱㄱ?",
      people: 7,
      dday: "2023-07-12-12:31",
      type: "play",
      content: "볼링 ㄱㄱ?",
    },
    {
      postId: 8,
      title: "쿠키런 길드원 모집",
      people: 20,
      dday: "2023-07-12-12:31",
      type: "play",
      content: "팡팡팡에서 길드원 모집합니다",
    },
    {
      postId: 9,
      title: "영화볼사람",
      people: 2,
      dday: "2023-07-12-12:31",
      type: "play",
      content: "잠실에서 영화볼사람~",
    },
    {
      postId: 10,
      title: "제육 ㄱㄱ",
      people: 4,
      dday: "2023-07-12-12:31",
      type: "etc",
      content: "제육 먹을사람~",
    },
  ];

  const idxChangeHandler = (idx) => {
    setIdxnumber(idx);
  };

  // 1. 부모가 자식한테 props로 idxChangeHandler를 onClick={idxChangeHandler}로 전달
  // 2. 자식은 props.onClick(page)로 다시 부모한테 전달이 됩니다
  // 3. page가 idx로 들어와서 Idxnumber 값이 자식이 보낸 값으로 업데이트됩니다!!!!!!!!!!!!!!!!!

  useEffect(() => {
    setCards(dummy);
    const newFiltered = cards.filter(
      (item) => props.category === "all" || item.type === props.category
    );
    setFilteredCards(newFiltered);
    idxChangeHandler();
  }, [idxNumber]);

  return (
    <>
      {cards &&
        cards
          .filter(
            (item) => props.category === "all" || item.type === props.category
          )
          .map((card) => {
            return (
              <Link
                to={{
                  pathname: `post/${card.postId}`,
                  state: { postId: card.postId },
                }}
                style={{ textDecoration: "none" }}
              >
                <Card
                  style={{
                    width: "18rem",
                    height: "18rem",
                    margin: "1rem",
                    boxShadow: "0 1px 8px rgba(0, 0, 0, 0.25)",
                  }}
                  key={card.postId}
                >
                  <Card.Body>
                    <img src={`{card.trasitional.url}`} />
                    <Card.Title style={{ color: "black", fontWeight: "bold" }}>
                      {card.title}
                    </Card.Title>
                    <Card.Subtitle
                      className="mb-2 text-muted"
                      style={{ color: "black" }}
                    >
                      {card.content}
                    </Card.Subtitle>
                    <Card.Subtitle
                      style={{ color: "black", fontWeight: "bold" }}
                    >
                      기간: {card.dday}까지
                    </Card.Subtitle>
                    <div style={{ marginTop: "10px" }}>
                      <button style={{ marginRight: "10px" }}>
                        #{card.type}
                      </button>
                      <button>모집 인원: {card.people}</button>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            );
          })}
      <Paging onClick={idxChangeHandler} />
    </>
  );
}

export default MainCard;
