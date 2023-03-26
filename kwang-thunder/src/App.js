import { useContext } from "react";
import "./App.css";
import Auth from "./Auth";
import { Routes, Route } from "react-router";
import MainPage from "./pages/main/mainPage";
import LoginPage from "./pages/login/loginPage";
import PostPage from "./pages/postPage/postPage";
import WritingPage from "./pages/writing/writingPage";
import MyPage from "./pages/mypage/myPage";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="writing" element={<WritingPage />} />
          <Route path="/oauth/kakao/callback" element={<Auth />} />
          <Route path="mypage" element={<MyPage />} />
          <Route path="post" element={<PostPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
