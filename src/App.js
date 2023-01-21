import React from "react";
import "./App.css";
// export defualt를 통해 모듈을 export하는 경우,import를 할 때 모듈 이름이 바뀌어도 무방하다!
// 어차피 한 파일에 export default는 한 번만 사용이 가능하기 때문이다.
import MainPageComponent from "./main/index.js";
import { Switch, Route } from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./product";

function App() {
  return (
    <div>
      <Switch>
        {/* 해당 경로로 들어갔을때 메인페이지컴포넌트를 보여주겠다! */}
        <Route exact={true} path={"/"}>
          <MainPageComponent />
        </Route>
        {/* :id는 파라미터이다,Route가 ProductPage에 파라미터값을 넣어준다! */}
        <Route exact={true} path={"/products/:id"}>
          <ProductPage />
        </Route>
        <Route exact={true} path="/upload">
          <UploadPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
