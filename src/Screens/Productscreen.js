import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Productscreen.css";
import { getproductsDetail } from "../redux/action/productAction";
import { addtocart } from "../redux/action/cartAction";
import Product from "./Product";


function Productscreen({ match, hitory }) {
  const history = useHistory()
  const [qty, setqty] = useState(1)
  const dispatch = useDispatch();
  const productdetail = useSelector((state) => state.getProductDetail)

  const { loading, error, product } = productdetail
  console.log("data -:", product)
  useEffect(() => {
    if (product && match.params.id !== product._id)
      dispatch(getproductsDetail(match.params.id))
  }, [dispatch, product, match])

  const cartHandler = () => {
    dispatch(addtocart(product._id, qty))
    history.push("/cart")
  }


  return (
    <div className="product_screen">
      {
        loading ? (<h2>loading...</h2>) : error ? (<h2>eroor..</h2>) : (
          <>

            <div className="pro_left">
              <div className="left_image">
                <img
                  src={product.imageUrl}
                  alt=""
                />
              </div>
              <div className="left_info">
                <p className="left_name">{product.name}</p>
                <p>Price: {product.price}</p>
                <p>{product.description}</p>
              </div>
            </div>
            <div className="pro_right"></div>
            <div className="right_info">
              <p>
                Price: <span>{product.price}</span>
              </p>
              <p>
                Status:{product.countInStock}
                <span>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</span>
              </p>
              <p>
                QTY
                <select value={qty} onChange={(e) => setqty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type="button" onClick={cartHandler}>Add TO Cart</button>
              </p>
            </div>
          </>
        )
      }
    </div>
  );
}

export default Productscreen;
