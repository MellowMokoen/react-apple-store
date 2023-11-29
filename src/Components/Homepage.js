//Homepage.js

import React, { useState } from "react";
import '../Styles/Homepage.css';
import CartOverview from './CartOverview';
import product1 from "../Images/Name=Watch.png";
import product2 from "../Images/Name=Headphones.png";
import product3 from "../Images/Name=Iphone-12-01.png";
import product4 from "../Images/Name=Iphone-12-02.png";
import product5 from "../Images/Name=Iphone-12-03.png";
import product6 from "../Images/Name=Iphone-12-04.png";
import product7 from "../Images/Name=Iphone-12-Pro-01.png";
import product8 from "../Images/Name=Iphone-12-Pro-02.png";

export default function Homepage() {
  const [cartItems, setCartItems] = useState([]);

  const addToCartHandler = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="product-container">
      <input type="search" placeholder="Apple Watch, Sony ZX33OBT, iPhone 11" />
      <div className="row">
        <div className="product-item">
          <img src={product1} alt="watch" />
          <p className="product-name">Apple Watch</p>
          <p className="product-color">Series5 SE</p>
          <p className="product-price">$ 529.99 </p>
          <button className="buy-button" onClick={() => addToCartHandler({ name: "Apple Watch", image: product1 })}>
            Add to Bag
          </button>
        </div>

        <div className="product-item">
          <img src={product2} alt="watch" />
          <p className="product-name">Sony ZX33OBT</p>
          <p className="product-color">Light Grey</p>
          <p className="product-price">$ 38.99 </p>
          <button className="buy-button" onClick={() => addToCartHandler({ name: "Sony ZX33OBT", image: product2 })}>
            Add to Bag
          </button>
        </div>

        <div className="product-item">
          <img src={product3} alt="watch" />
          <p className="product-name">Iphone 11</p>
          <p className="product-color">Series Black</p>
          <p className="product-price">$ 619.99</p>
          <button className="buy-button" onClick={() => addToCartHandler({ name: "Iphone 11", image: product3 })}>
            Add to Bag
          </button>
        </div>

        <div className="product-item">
          <img src={product4} alt="watch" />
          <p className="product-name">Iphone 11</p>
          <p className="product-color">Series Blue</p>
          <p className="product-price">$ 619.99 </p>
          <button className="buy-button" onClick={() => addToCartHandler({ name: "Iphone 11", image: product4 })}>
            Add to Bag
          </button>
        </div>
      </div>

      <div className="row">
        <div className="product-item">
          <img src={product5} alt="watch" />
          <p className="product-name">Iphone 11</p>
          <p className="product-color">Product Red</p>
          <p className="product-price">$ 619.99</p>
          <button className="buy-button" onClick={() => addToCartHandler({ name: "Iphone 11", image: product5 })}>
            Add to Bag
          </button>
        </div>

        <div className="product-item">
          <img src={product6} alt="watch" />
          <p className="product-name">Iphone 11</p>
          <p className="product-color">Milky White</p>
          <p className="product-price">$ 619.99</p>
          <button className="buy-button" onClick={() => addToCartHandler({ name: "Iphone 11", image: product6 })}>
            Add to Bag
          </button>
        </div>

        <div className="product-item">
          <img src={product7} alt="watch" />
          <p className="product-name">Iphone 13</p>
          <p className="product-color">Product Red</p>
          <p className="product-price">$ 619.99</p>
          <button className="buy-button" onClick={() => addToCartHandler({ name: "Iphone 13", image: product7 })}>
            Add to Bag
          </button>
        </div>

        <div className="product-item">
          <img src={product8} alt="watch" />
          <p className="product-name">Iphone 14</p>
          <p className="product-color">Product Red</p>
          <p className="product-price">$ 619.99</p>
          <button className="buy-button" onClick={() => addToCartHandler({ name: "Iphone 14", image: product8 })}>
            Add to Bag
          </button>
        </div>
      </div>

      {/* Render the CartOverview component */}
      <CartOverview cartItems={cartItems} />
    </div>
  );
}
