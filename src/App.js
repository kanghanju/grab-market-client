import React from "react";
import "./App.css";
// export defualt를 통해 모듈을 export하는 경우,import를 할 때 모듈 이름이 바뀌어도 무방하다!
// 어차피 한 파일에 export default는 한 번만 사용이 가능하기 때문이다.
import MainPageComponent from "./main/index.js";

function App() {
  return <MainPageComponent />;
}

export default App;
