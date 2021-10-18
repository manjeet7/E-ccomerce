import * as actionTypes from "../constant/productConstant";

export const getprductreducerReducer = (state = { product: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_RQUEST:
      return {
        loading: true,
        product: [],
      };
    case actionTypes.GET_PRODUCTS_SUCCESS:
      console.log("payload", action.payload)
      return {
        loading: false,
        product: action.payload,
      };

    case actionTypes.GET_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getproductdetailReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_DETAIL_RQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_PRODUCT_DETAIL_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case actionTypes.GET_PRODUCT_DETAIL_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_PRODUCT_DETAIL_RESET:
      return {
        product: {},
      };

    default:
      return state;
  }
};
