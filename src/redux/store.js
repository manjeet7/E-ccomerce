import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer } from "./reducer/cartReducer";
import {
  getprductreducerReducer,
  getproductdetailReducer,
} from "./reducer/productReducer";

const reducer = combineReducers({
  cart: cartReducer,
  getProduct: getprductreducerReducer,
  getProductDetail: getproductdetailReducer,
});

const middlewear = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlewear))
);

export default store;
