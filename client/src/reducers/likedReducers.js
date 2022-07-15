import { LIKED_ADD_ITEM, LIKED_REMOVE_ITEM } from "../constants/likedConstant";

export const likedReducer = ( state = { likedItems:[]}, action) => {
    switch(action.type){
        case LIKED_ADD_ITEM:
            const item = action.payload;
            const existItem = state.likedItems.find(x => x.product === item.product);
            if(existItem){
                return{
                    ...state,
                likedItems: state.likedItems.map( x => x.product === existItem.product ? item : x ),
                };
            }else{
                return {...state, likedItems: [ ...state.likedItems, item]};
            }
        case LIKED_REMOVE_ITEM:
                return {
                  ...state,
                  likedItems: state.likedItems.filter((x) => x.product !== action.payload),
                };
        default:
            return state;
    }

}