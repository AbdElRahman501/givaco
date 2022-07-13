import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './reducers/cartReducers';
import{ productDetailsReducer, productListReducer} from './reducers/productReducers';




const initialState = {
    cart: {cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems")) 
    : null },
}

const store = configureStore({
  reducer: {
    productList: productListReducer,
    productDetalis: productDetailsReducer,
    cart: cartReducer
  },
  preloadedState: initialState,
})

export default store
