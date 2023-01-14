import React from "react";

function TimerComponent() {
  // const [상태 값 저장 변수, 상태 값 갱신 함수] = useState(상태 초기 값);
  const [time, setTime] = React.useState(0);
  // time이라는 state가 업데이트 될때마다 재실행되고 time에는 새로운 값이 업데이트 되고 업데이트된 값을 화면에 보여준다
  console.log("컴포넌트 업데이트");
  function updateTime() {
    setTime(time + 1);
  }
  return (
    <div>
      <h3>{time}초</h3>
      <button onClick={updateTime}>1씩 올려주세요</button>
    </div>
  );
}

export default TimerComponent;
