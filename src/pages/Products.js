import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { link_products } from '../api/Api';
import "../scss/products.scss";
import { click } from '@testing-library/user-event/dist/click';

// const addButton = document.querySelector(".btn")
// addButton.addEventListener ("click", addItem);

// function addItem() {
//   console.log("add item to basket")
// }
// addItem();

function Products() {
  const {goods} = useParams();
  // console.log(goods);

const [stuff, setStuff] = useState([]);

  useEffect(()=>{
    fetch(link_products)
    .then(res=>res.json())
    .then(json=>setStuff(json))
  }, [])

console.log(stuff);

const allStuff = stuff.map((thing, index)=>{
  function click(){
    const array = JSON.parse(localStorage.getItem('itemDesc') )|| []
    array.push(
      {
        image: thing.image,
        title: thing.title,
        price: thing.price,
        id: thing.id,
        quantity: 1,
      }
    )
    localStorage.setItem("itemDesc", JSON.stringify(array));
    // console.log(thing.id)
    // console.log(thing.title)
  }
  if (goods === thing.category) {
    return (
      <div className='product__item'>
        <div>
          <img className='picture' src={thing.image} alt="image"></img>
        </div>
        <div className='product__desc'>
          <h3 className='product__title'>{thing.title}</h3>
          <p className='product__price'>$ {thing.price}</p>
          <div>
            <p>{thing.rating.rate}</p>
          </div>
          <button onClick={click} className='btn'>ADD</button> 
        </div>
      </div>
    )
  } 
})


  return (
    <div className='stuff'>{allStuff}</div>
  )
}

export default Products

