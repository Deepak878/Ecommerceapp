import { ActionTypes } from "../constants/action-types"

export const setProducts = (products) =>{
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload:products,
  }
}

export const selectedProduct = (products) =>{
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload:products,
  }
}

// export const deleteProducts = (products) =>{
//   return {
//     type: ActionTypes.SET_PRODUCTS,
//     payload:products,
//   }
// }
export const cartProducts = (productId) =>{
  console.log("yahoo product id aaoyo", productId);
  return {
    type: ActionTypes.CART_PRODUCTS,
    payload:productId,
  }
}
