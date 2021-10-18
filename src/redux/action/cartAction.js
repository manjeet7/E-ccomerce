import * as actionTypes from "../constant/cartConstant";
import axios from "axios";

export const addtocart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`http://localhost:5500/api/products/${id}`);

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      product: data._id,
      name: data.name,
      imageURL: data.imageURL,
      countInStock: data.countInStock,
      price: data.price,
      qty,
    },
  });
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItem));
};

export const removefromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItem));
};
