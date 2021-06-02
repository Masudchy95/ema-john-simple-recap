import React, { useState } from "react";
import fakeData from "../../fakeData";
import Product from "../Product/Product";
import css from './Shop.css'

const Shop = () => {
  const first20 = fakeData.slice(0, 20);
  const [products, setProducts] = useState(first20);

  return (
    <div className="shop-container">
      <div className="product-container">
          {
            products.map(pd => (<Product product = {pd}></Product>))
          }
      </div>
      <div className="cart-container">
          <h3>This is Cart</h3>
      </div>
    </div>
  );
};

export default Shop;
