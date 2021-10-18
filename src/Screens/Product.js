import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

function Product({ ImageUrl, name, price, description, productId }) {
  return (
    <div className="product">
      <img src={ImageUrl} />
      <div className="prduct_info">
        <p className="info_name">{name}</p>
        <p className="info_description">{description.substring(0, 100)}</p>
        <p className="info_price">{price}</p>
        <Link to={`/product/${productId}`} className="info_button">
          view
        </Link>
      </div>
    </div>
  );
}

export default Product;
