import React, { useEffect } from "react";
import Cartitem from "../component/Cartitem";
import "./Cartscreen.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addtocart, removefromCart } from "../redux/action/cartAction";

function Cartscreen() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItem } = cart;
  console.log("cart", cartItem);
  const qtyChangeHandler = (id, qty) => {
    dispatch(addtocart(id, qty));
  };
  return (
    <div className="cart_screen">
      <div className="cartscreen_left">
        {cartItem.length === 0 ? (
          <div>
            Your cart is empty <Link to="/">Go Back</Link>
          </div>
        ) : (
          cartItem.map((cart) => (
            <Cartitem qtyChangeHandler={qtyChangeHandler} />
          ))
        )}
      </div>
      <div className="cartscreen_right">
        <div className="cartscreen_info">
          <h2>subtotal(0) items</h2>
        </div>
        <div>
          <button>Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cartscreen;
