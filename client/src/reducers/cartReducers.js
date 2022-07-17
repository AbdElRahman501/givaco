import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstant";

export const cartReducer = ( state = { cartItems:[]}, action) => {
    switch(action.type){
        case CART_ADD_ITEM:
            const item = action.payload;
            const existItem = state.cartItems.find(x => x.product === item.product
                ? x.color===item.color
                ?x.size===item.size
                ?true:false:false:false);
            if(existItem){
                return{
                    ...state,
                cartItems: state.cartItems.map( x => x.product === existItem.product
                ? x.color===item.color
                ?x.size===item.size
                ?item:x:x:x),
                };
            }else{
                return {...state, cartItems: [ ...state.cartItems, item]};
            }
        case CART_REMOVE_ITEM:
            const deletItem = action.payload

                return {
                    
                  ...state,
                  cartItems: state.cartItems.filter(x =>  
                    x.id === deletItem.id
                    ? x.color===deletItem.color
                    ? x.size===deletItem.size
                    ?false:true:true:true )
                };
        default:
            return state;
    }

}