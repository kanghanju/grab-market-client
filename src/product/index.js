import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import "./index.css";

function ProductPage() {
  // 해당 프로젝트페이지에는 App.js의 path="/products/:id" 아이디가 들어가게 된다
  //id가 오브젝트로 주워진다. destructuring을 사용함.
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  //우리가 추출한 id에 맞는 네트워크 요청을 해야한다,useEffect를 이용해 네트워크 요청을 1번한다
  React.useEffect(function () {
    axios
      .get(
        `https://17b80db1-c932-4663-bb92-196a187b7491.mock.pstmn.io/products/${id}`
      )
      .then(function (result) {
        setProduct(result.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  // if문이 없으면 비동기처리로 return을해서 product가 null이다
  if (product === null) {
    return <h1>상품 정보를 받고 있습니다 ...</h1>; //return이 실행되면 아래 return은 실행되지 않는다
  }

  return (
    <div>
      <div id="image-box">
        <img src={"/" + product.imageUrl} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}</div>
        <div id="createdAt">2023년 2월 5일</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}

export default ProductPage;
