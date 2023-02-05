import "antd/dist/antd.css";
import React from "react";
import "./App.css";
// export defualt를 통해 모듈을 export하는 경우,import를 할 때 모듈 이름이 바뀌어도 무방하다!
// 어차피 한 파일에 export default는 한 번만 사용이 가능하기 때문이다.
import MainPageComponent from "./main/index.js";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import UploadPage from "./upload/index.js";
import ProductPage from "./product/index.js";
import { Button } from "antd";
import { CloudDownloadOutlined, DownloadOutlined } from "@ant-design/icons";

function App() {
  // useHistory를 사용하면 history객체의 method를 실행시킬 수 있다
  const history = useHistory();
  return (
    <div>
      {/* header랑 footer가 mainpage,productpage,uploadpage를 거치더라도 항상 App.js가 실행이 먼저되기 때문에(부모여서)
      부모는 항상 header와 body footer를 가진다 */}
      <div id="header">
        <div id="header-area">
          <Link to="/">
            {/* 주의:절대경로를 표시 */}
            <img src="/images/icons/logo.png" />
          </Link>
          <Button
            size="large"
            onClick={function () {
              //해당사이트에서 다른 경로로 이동하겠다는 명령어
              history.push("/upload");
            }}
            icon={<DownloadOutlined />}
          >
            상품 업로드
          </Button>
        </div>
      </div>
      <div id="body">
        <Switch>
          {/* 해당 경로로 들어갔을때 메인페이지컴포넌트를 보여주겠다! */}
          <Route exact={true} path="/">
            <MainPageComponent />
          </Route>
          {/* :id는 파라미터(동적으로 값이 바뀜)이다,Route가 ProductPage에 파라미터값을 넣어준다! */}
          <Route exact={true} path="/products/:id">
            <ProductPage />
          </Route>
          <Route exact={true} path="/upload">
            <UploadPage />
          </Route>
        </Switch>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
