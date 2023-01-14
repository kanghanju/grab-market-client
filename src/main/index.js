// export하는 부분이 없는 css파일 경우 from을 적어주지 않는다
import React from "react";
import "./index.css";
import axios from "axios";

// react는 실제로 짠 코드들을 프로그램 실행 뒤 마지막에 index.html로 합칩니다. 그래서 그냥 클릭한다고 보이지 않습니다
function MainPage() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(function () {
    axios
      .get(
        "https://17b80db1-c932-4663-bb92-196a187b7491.mock.pstmn.io/products"
      )
      .then(function (result) {
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.error("에러발생:", error);
      });
  }, []);
  // npm새로운 패키지를 다운받으면 react프로젝트를 새롭게 실행시켜줘야한다

  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="./images/icons\logo.png" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="./images/banners\banner1.png" />
        </div>
        <h1>판매되는 상품들</h1>
        <div id="product-list">
          {products.map(function (product, index) {
            return (
              <div className="product-card">
                <div>
                  <img className="product-image" src={product.imageUrl} />
                </div>
                <div className="product-contents">
                  <span className="product-name">{product.name}</span>
                  <span className="product-price">{product.price}원</span>
                  <div className="product-seller">
                    <img className="product-avatar" src={product.seller} />
                    <span>그랩</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
  // react는 복수개의 태그를 return할 수 없다!따라서 div안에 씌워준다
}
export default MainPage;
