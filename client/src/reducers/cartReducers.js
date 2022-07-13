// import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstant";

import { ADD_QUANTITY, ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART, SUB_QUANTITY } from "../constants/cartConstant";

const initialState = {
    products: [],
  };

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        return {
          ...state,
          products: state.products.map(product =>
            product.id === action.id ? {...product, selected: true} : product,
          ),
        };
      case REMOVE_FROM_CART:
        return {
          ...state,
          products: state.products.map(product =>
            product.id === action.id
              ? {...product, selected: false, quantity: 1}
              : product,
          ),
        };
      case ADD_QUANTITY:
        return {
          ...state,
          products: state.products.map(product =>
            product.id === action.id
              ? {...product, quantity: product.quantity + 1}
              : product,
          ),
        };
      case SUB_QUANTITY:
        return {
          ...state,
          products: state.products.map(product =>
            product.id === action.id
              ? {
                  ...product,
                  quantity: product.quantity !== 1 ? product.quantity - 1 : 1,
                }
              : product,
          ),
        };
      case EMPTY_CART:
        return {
          ...state,
          products: state.products.map(product =>
            product.selected
              ? {...product, selected: false, quantity: 1}
              : product,
          ),
        };
      default:
        return state;
    }
  };



















// ( state = initialState, action) => {
//     switch(action.type){
//         case CART_ADD_ITEM:
//             const item = action.payload;
//             const existItem = state.cartItems?.find(x => x.product === item.product);
//             if(existItem){
//                 return{
//                     ...state,
//                 cartItems: state.cartItems?.map( x => x.product === existItem.product ? item : x ),
//                 };
//             }else{
//                 return {...state, cartItems: [ ...state.cartItems, item]};
//             }
//         case CART_REMOVE_ITEM:
//                 return {
//                   ...state,
//                   cartItems: state.cartItems?.filter((x) => x.product !== action.payload),
//                 };
//         default:
//             return state;
//     }

// }













