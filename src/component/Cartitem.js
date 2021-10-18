import React from "react";
import "./cartitem.css";
import { Link } from "react-router-dom";

function Cartitem({ item, qtyChangeHandler }) {
  return (
    <div className="cartitem">
      <div className="cartitem_image">
        <img src={item.imageUrl} />
      </div>
      <Link to={`/product/${item.product}`} className="cartitem_name">
        <p>Product 1</p>
      </Link>
      <p className="cartitem_price">${item.price}</p>
      <select
        className="cartitem_select"
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
      >
        {[...Array(item.countInStock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>
      <button className="cartitem_delete">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Cartitem;
