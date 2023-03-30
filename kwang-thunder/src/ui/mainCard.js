import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { Link } from "react-router-dom";

function MainCard(props) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      try {
        const cardList = await axios
          .get(
            "https://aae6c754-9791-46c8-a805-4d38ac740450.mock.pstmn.io/post/list/"
          )
          .then(function (response) {
            setCards(response.data);
          });
      } catch (e) {
        console.log(e);
      }
    };
    getCards();
  }, []);

  // const Dummy = [
  //   {
  //     postId: 1,
  //     title: "벚꽃 보러 갈 사람!",
  //     people: 15,
  //     dday: "2023-03-30-13:00",
  //     type: "game",
  //     content: "Hello Flower!",
  //   },
  //   {
  //     postId: 2,
  //     title: "밥 먹을 사람!",
  //     people: 2,
  //     dday: "2023-03-29-14:50",
  //     type: "meal",
  //     content: "Hello Bop!",
  //   },
  //   {
  //     postId: 3,
  //     title: "술 먹을 사람!",
  //     people: 15,
  //     dday: "2023-03-30-13:00",
  //     type: "meal",
  //     content: "Hello Drink!",
  //   },
  //   {
  //     postId: 4,
  //     title: "고양이 보러 갈 사람!",
  //     people: 15,
  //     dday: "2023-03-30-13:00",
  //     type: "game",
  //     content: "Hello Cat!",
  //   },
  //   {
  //     postId: 5,
  //     title: "공부할 사람!!",
  //     people: 15,
  //     dday: "2023-03-30-13:00",
  //     type: "study",
  //     content: "Hello Study!",
  //   },
  //   {
  //     postId: 6,
  //     title: "롤할 사람!!",
  //     people: 15,
  //     dday: "2023-03-30-13:00",
  //     type: "game",
  //     content: "Hello LOL!",
  //   },
  //   {
  //     postId: 7,
  //     title: "풋살할 사람!!",
  //     people: 15,
  //     dday: "2023-03-30-13:00",
  //     type: "game",
  //     content: "Hello Ball!",
  //   },
  // ];
  // useEffect(() => {
  //   setCards(Dummy);
  // }, []);

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
    </>
  );
}

export default MainCard;
