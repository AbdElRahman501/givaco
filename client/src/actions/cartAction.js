import Axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstant";

export const addToCart = (productId, qty, itemColor, itemSize) => async (dispatch, getState) => {
    const { data } = await Axios.get('/api/products/' + productId);

    const color = data.colors.find(x => x === itemColor)
    const size = data.sizes.find(x => x === itemSize)
        const colorsInStoke = data.inStoke.find((x) => x.color === itemColor)
        const sizesPerColor = colorsInStoke.sizes.find(x => x.size === itemSize)
        const inStoke = sizesPerColor.qty
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            id: data._id,
            title: data.title,
            content: data.content,
            category: data.category,
            prand: data.prand,
            rating: data.rating,
            numberOfRating: data.numberOfRating,
            price: data.price,
            image: data.image,
            inStoke: inStoke,
            product: data._id,
            color: color,
            size: size,
            qty,

        }
    });
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (item) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: {
            id: item.id,
            color: item.color,
            size: item.size
        }
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};