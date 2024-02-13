import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "../scss/basket.scss";
import Counter from "../components/Counter";
import Price from "../components/Price";

function Basket() {
  const basketItem = localStorage.getItem("itemDesc");
  const cartElem = JSON.parse(basketItem);
  // console.log(cartElem);

  // массив из local Storage
  const [elem, setElem] = useState(1);
  const [product, setProduct] = useState(cartElem);
// console.log(product);

  const cartItem = cartElem?.map((item) => {
    function click() {
      setElem(elem + 1);
      // console.log(elem);

      setProduct((e) => {
        e?.map((i) => (item.id === i.id ? { ...i, quantity: elem } : i));
      });
    }
    
    return (
      <div className="cartItem">
        <div className="cartImg">
          <img src={item.image} alt={item.title}></img>
        </div>
        <div className="cartItem__desc">
          <h3>{item.title}</h3>
          <p>price: {item.price}</p>
          {/* <Counter /> */}
          <div className="quantity">
            <button onClick={click} className="btnAdd">
              -
            </button>
            <p>quantity: {item.quantity}</p>
            <button className="btnAdd">+</button>
          </div>
        </div>
      </div>
    );
  });
  localStorage.setItem("itemDesc", JSON.stringify(product))
  console.log(product);
  return <div className="basket__item">{cartItem}</div>;
}

export default Basket;

// setProduct(
//   product.map((i) => {
//     if (item.id === i.id) {
//       console.log(i);
//     }
//   })
// );
