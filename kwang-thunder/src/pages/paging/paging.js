import React, { useState, useEffect } from "react";
import paging from "../../css/paging.css";
import Pagination from "react-js-pagination";
import axios from "axios";
const Paging = (props) => {
  const [page, setPage] = useState(1);

  const handlePageChange = (page) => {
    setPage(page);
    props.onClick(page);
  };

  // const totalItemCount = async()=>{
  //   axios.get()
  // }
  // 1. axios로 총 게시글 수 불러오고
  // 2. 9으로 나눠서 몫을 totalItemsCount로
  // api는 https://aae6c754-9791-46c8-a805-4d38ac740450.mock.pstmn.io/post/list/

  // 1. 54 setData 불러옴
  // 2. itemsCounterPerPage이용
  // (setData / itemsCountPerPage)
  // 3페이지 보고싶다.
  // 19번째~27번째 게시글
  // 나머지가 있는 놈들 => 몫 +1 ==>>>>> Math.ceil ==> setPage = Math.ceil(setData/itemsCountPerPage)
  // 나머지가 없으면 걍 그 몫에 넣어라!

  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={11}
      totalItemsCount={50}
      pageRangeDisplayed={5}
      prePageText={"<"}
      nextPageText={">"}
      onChange={handlePageChange}
    />
  );
};

/*
  const [items,setItems]= useState([]);
  const [count,setCount]=.useState([]);
  const [currentpage,setCurrentpage] = useState([1]);
  const [postPerPage] = useState(16);
  const [indexOfLastPost, setIndexOfLastPost] = useState(0);
  const [indexOfFirsttPost, setIndexOfFirstPost] = useState(0);
  const [currentPosts, setCurrentPosts] = useState(0);

  React.useEffect(() => {
  setCount(items.length);
  setIndexOfLastPost(currentpage * postPerPage);
  setIndexOfFirstPost(indexOfLastPost - postPerPage);
  setCurrentPosts(items.slice(indexOfFirstPost, indexOfLastPost));
}, [currentpage, indexOfFirstPost, indexOfLastPost, items, postPerPage]);

const setPage = (e) => {
  setCurrentpage(e);
};
return (
  {currentPosts && items.length > 0 ? (
      currentPosts.map((item)=> (
          <div>{item.title}</div>
          <div>{item.content}</div>
      ))
     ) 
     : <div>게시물이 없습니다.</div>
	}
     <Paging page={currentpage} count={count} setPage={setPage} />
)
*/
export default Paging;
