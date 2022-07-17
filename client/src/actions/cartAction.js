import Axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstant";

export const addToCart = (productId , qty,colorId,sizeId) => async(dispatch , getState) => {
 const {data} = await Axios.get('/api/products/'+productId);
 
 const colors = data.colors.find(x => x.id === colorId.toString())
 const sizes = data.sizes.find(x => x.id === sizeId.toString())
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
        color : colors.color,
        colorId : colors.id,
        size : sizes.size,
        sizeId : sizes.id,
        qty,

    }
 });
 localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (item) => (dispatch, getState) => {
    dispatch({ 
    type: CART_REMOVE_ITEM, 
    payload: {
        id : item.id,
        color : item.color,
        size : item.size
    }  
});
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
  };