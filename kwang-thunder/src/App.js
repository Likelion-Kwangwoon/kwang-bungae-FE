import "./App.css";
import Auth from "./Auth";
import { Routes, Route } from "react-router";
import MainPage from "./pages/main/mainPage";
import LoginPage from "./pages/login/loginPage";
import PostPage from "./pages/postPage/postPage";
import WritingPage from "./pages/writing/writingPage";
import MyPage from "./pages/mypage/myPage";
import CardProvider from "./store/card-context.js";

function App() {
  const REST_API_KEY = "7c749d6829ffb31f2015c71640b42eb4";
  const REDIRECT_URI = "https://localhost:3000/oauth/kakao/callback";
  const KAKAO_AUTH_URL =
    "https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code.";

  return (
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
  );
}

/*<Route path="/oauth/kakao/callback">
            <Auth />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>*/

export default App;
