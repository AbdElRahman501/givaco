// import Axios from "axios";
import { ADD_QUANTITY, ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART, SUB_QUANTITY } from "../constants/cartConstant";


export const addToCart = productId => {
    return {
      type: ADD_TO_CART,
      productId
    };
  };
  export const removeFromCart = productId => {
    return {
      type: REMOVE_FROM_CART,
      productId,
    };
  };
  export const subtractQuantity = productId => {
    return {
      type: SUB_QUANTITY,
      productId,
    };
  };
  export const addQuantity = productId => {
    return {
      type: ADD_QUANTITY,
      productId,
    };
  };
  export const emptyCart = () => {
    return {
      type: EMPTY_CART,
    };
  }



















// import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstant";

// export const addToCart = (productId , qty) => async(dispatch , getState) => {
//  const {data} = await Axios.get('/api/products/'+productId);
//  dispatch({
//     type: CART_ADD_ITEM,
//     payload:{
//         id: data._id,
//         title : data.title,
//         content: data.content,
//         category: data.category ,
//         prand: data.prand,
//         rating: data.rating ,
//         numberOfRating: data.numberOfRating ,
//         price : data.price,
//         image : data.image,
//         inStoke : data.inStoke,
//         product: data._id,
//         qty,
//     }
//  });
//  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
// };

// export const removeFromCart = (productId) => (dispatch, getState) => {
//     dispatch({ type: CART_REMOVE_ITEM, payload: productId });
//     localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
//   };