import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './reducers/cartReducers';
import { likedReducer } from './reducers/likedReducers';
import{ productDetailsReducer, productListReducer} from './reducers/productReducers';
import { userSigninReducer } from './reducers/useReducer';




const initialState = {
  cart: {cartItems: localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems")) 
  : [] },
  liked:{likedItems: localStorage.getItem("likedItems")
  ? JSON.parse(localStorage.getItem("likedItems"))
  : [] },
  userSignin:{userInfo: localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null }

}

const store = configureStore({
  reducer: {
    productList: productListReducer,
    productDetalis: productDetailsReducer,
    cart: cartReducer,
    liked: likedReducer,
    userSignin: userSigninReducer
  },
  preloadedState: initialState,
})

export default store
