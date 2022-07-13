import Axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstant";

export const addToCart = (productId , qty) => async(dispatch , getState) => {
 const {data} = await Axios.get('/api/products/'+productId);
 dispatch({
    type: CART_ADD_ITEM,
    payload:{
        id: data._id,
        title : data.title,
        content: data.content,
        category: data.category ,
        prand: data.prand,
        rating: data.rating ,
        numberOfRating: data.numberOfRating ,
        price : data.price,
        image : data.image,
        inStoke : data.inStoke,
        product: data._id,
        qty,
    }
 });
 localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: productId });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
  };