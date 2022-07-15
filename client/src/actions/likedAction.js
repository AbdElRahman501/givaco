import Axios from "axios";
import { LIKED_ADD_ITEM, LIKED_REMOVE_ITEM } from "../constants/likedConstant";

export const addToLiked = (productId) => async(dispatch , getState) => {
 const {data} = await Axios.get('/api/products/'+productId);
 dispatch({
    type: LIKED_ADD_ITEM,
    payload:{
        _id: data._id,
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
        isLiked : true

    }
 });
 localStorage.setItem("likedItems", JSON.stringify(getState().liked.likedItems));
};

export const removeFromLiked = (productId) => (dispatch, getState) => {
    dispatch({ type: LIKED_REMOVE_ITEM, payload: productId });
    localStorage.setItem('likedItems', JSON.stringify(getState().cart.likedItems));
  };