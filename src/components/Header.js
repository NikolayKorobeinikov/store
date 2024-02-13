import { useEffect, useState } from "react";
import "../scss/header.scss"; // импортируем стили header.scss
import { link_categories } from "../api/Api";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Home from "../pages/Home";
import Basket from "../pages/Basket";

export function Header() {
  const [data, setData] = useState([]); //указываем тот тип данных с которым работаем
  useEffect(() => {
    fetch(link_categories)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  // console.log(data);
  const categories = data.map((category, index) => {
    // console.log(category);
    return (
      <>
        <Link to={`/products/${category}`} className="title">
          {category}
        </Link>
      </>
    );
  });


  // return Header-a
  return (
    <>
      <div>
        <Link className="main__page" to="/">Home</Link>
        <Link to="/basket"><FontAwesomeIcon icon={faCartShopping} /></Link>
      </div>
      <div className="categories">{categories}</div>
    </>
  );
}
