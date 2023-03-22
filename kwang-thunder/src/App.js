import "./App.css";
import { Routes, Route } from "react-router";
import MainPage from "./pages/main/mainPage";
import ChangePwdPage from "./pages/changePwdPage/changePwdPage";
import LoginPage from "./pages/login/loginPage";
import PostPage from "./pages/postPage/postPage";
import WritingPage from "./pages/writing/writingPage";
import RegisterPage from "./pages/register/registerPage";
import MyPage from "./pages/mypage/myPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="writing" element={<WritingPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="mypage" element={<MyPage />} />
        <Route path="changePwd" element={<ChangePwdPage />} />
        <Route path="post" element={<PostPage />} />
      </Routes>
    </div>
  );
}

export default App;
