import * as actionTypes from "../constant/cartConstant";

export const cartReducer = (state = { cartItem: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload;
      const existItem = state.cartItem.find((x) => x.prduct === item.product);

      //if it is existed item
      if (existItem)
        return {
          ...state,
          cartItem: state.cartItem.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      else
        return {
          ...state,
          cartItem: [...state.cartItem, item],
        };

    case actionTypes.REMOVE_FROM_CART:
      return {
        cartItem: state.cartItem.filter((x) => x.product !== action.payload),
      };

    default:
      return state;
  }
};
