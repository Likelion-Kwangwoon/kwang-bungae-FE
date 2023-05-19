import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
import "../css/prenext.css";

function MainCard(props) {
  const TEMP_TOKEN =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ0ZXN0IiwiaWF0IjoxNjgzNjI4ODQ5LCJleHAiOjE2ODM2NjQ4NDksInN1YiI6ImNoczk4NDEyQG5hdmVyLmNvbSIsIm5pY2tuYW1lIjoi7LWc7ZiB7IicIiwidWlkIjoiY2hzOTg0MTJAbmF2ZXIuY29tIiwicGxhdGZvcm0iOiJrYWthbyJ9.D9Hn0E_XiI--_EzuDmadQd_SeLTaa961ANgtgVkJHhA";
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [idxNumber, setIdxnumber] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cards.slice(indexOfFirstItem, indexOfLastItem);
  useEffect(() => {
    // const getCards = async () => {
    //   try {
    //     const cardList = await axios
    //       .get("http://34.64.180.211:8080/post/list")
    //       .then(function (response) {
    //         setCards(response.data);
    //       });
    //   } catch (e) {
    //     console.log(e);
    //   }
    // };
    // getCards();
    async function getCards() {
      try {
        await axios
          .get("http://34.64.180.211:8080/post/list", {
            headers: {
              Authorization: `Bearer ${TEMP_TOKEN}`,
            },
          })
          .then(function (response) {
            setCards(response.data);
          });
      } catch (e) {
        console.log(e);
      }
    }
    getCards();
  }, []);

  const renderCards = () => {
    return currentItems.map((card) => {
      return (
        <div key={card.postId}>
          <h2>{card.title}</h2>
          <p>{card.people}</p>
          <p>{card.dday}</p>
          <p>{card.type}</p>
          <p>{card.content}</p>
        </div>
      );
    });
  };

  // const idxChangeHandler = (idx) => {
  //   setIdxnumber(idx);
  // };

  return (
    <>
      {/*{cards &&
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
          })} */}
      {renderCards()}
      <Pagination
        activePage={currentPage}
        pageRangeDisplayed={5}
        prevPageText={"<"}
        nextPageText={">"}
        onChange={(pageNumber) => setCurrentPage(pageNumber)}
        totalItemsCount={cards.length}
        itemsCountPerPage={itemsPerPage}
      />
    </>
  );
}

export default MainCard;
