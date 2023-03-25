import { useState, useEffect, useContext } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";

function MainCard(props) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      try {
        const cardList = await axios
          .get(
            "https://1c163030-febb-40eb-ad08-95b9a0693d06.mock.pstmn.io/post/list/"
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

  return (
    <>
      {cards &&
        cards
          .filter(
            (item) => props.category === "all" || item.type === props.category
          )
          .map((card) => {
            return (
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
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {card.content}
                  </Card.Subtitle>
                  <Card.Subtitle>기간: {card.dday}까지</Card.Subtitle>
                  <div style={{ marginTop: "10px" }}>
                    <button style={{ marginRight: "10px" }}>
                      #{card.type}
                    </button>
                    <button>모집 인원: {card.people}</button>
                  </div>
                </Card.Body>
              </Card>
            );
          })}
    </>
  );
}

export default MainCard;
