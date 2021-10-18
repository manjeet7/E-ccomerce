import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import "./Homescreen.css";
import { getproducts as listproducts } from "../redux/action/productAction";
import axios from "axios";

function Homescreen() {
  const dispatch = useDispatch();
  const getpro = useSelector((state) => state.getProduct);
  console.log("product", getpro)
  const { product, loading, error } = getpro;
  console.log("product", product)


  useEffect(() => {
    dispatch(listproducts());
    console.log("called")
  }, [dispatch]);

  return (
    <div className="homescreen">
      <h2 className="home_title">Latest Products</h2>
      <div className="home_products">
        {product.map(products => (
          <Product productId={products._id} name={products.name}
            price={products.price}
            description={products.description}
            ImageUrl={products.imageUrl} />
        ))}
      </div>
    </div>
  );
}

export default Homescreen;
