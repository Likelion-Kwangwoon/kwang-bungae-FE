import React from "react";
import Card from "../../ui/card";
import Input from "../../input/input";
import KakaoImage from "../../images/kakaoLogin.png";
function loginPage() {
  return (
    <Card>
      <div>
        {/*로그인..페이지..글..써야하는 칸만 잇음 돼여*/}
        <button>
          <img src={KakaoImage}></img>
        </button>
      </div>
    </Card>
  );
}
export default loginPage;
