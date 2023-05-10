import { ActionTypes } from "../constants/action-types";

const initialState = {
  productId: [],
}
export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.CART_PRODUCTS:
     
      return { ...state, productId:[...state.productId, payload]}
      
      return state;
    default:
      return state;
  }
};
