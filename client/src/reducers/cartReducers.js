import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstant";

const initialState = { cartItems: []}

export const cartReducer = ( state =initialState , action) => {
    switch(action.type){
        case CART_ADD_ITEM:
                return{
                  ...state,
                  cartItems: state.cartItems?.map(product =>
                    product.id === action.id ? product : action,
                  ),
                };
                
        case CART_REMOVE_ITEM:
                return {
                  ...state,
                  cartItems: state.cartItems?.filter((x) => x.product !== action.payload),
                };
        default:
            return state;
    }

}