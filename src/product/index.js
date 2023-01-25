import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect,useState } from "react";

function ProductPage() {
  // 해당 프로젝트페이지에는 App.js의 path="/products/:id" 아이디가 들어가게 된다
  //id가 오브젝트로 주워진다. destructuring을 사용함.
  const { id } = useParams();
  //우리가 추출한 id에 맞는 네트워크 요청을 해야한다,useEffect를 이용해 네트워크 요청을 1번한다 
  useEffect(function () {
    axios
      .get(
        `https://17b80db1-c932-4663-bb92-196a187b7491.mock.pstmn.io/products/${id}`
      )
      .then(function (result) {
        console.log(result);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return <h1>상품 상세 페이지 {id} 상품</h1>;
}

export default ProductPage;
