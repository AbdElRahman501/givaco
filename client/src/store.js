import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './reducers/cartReducers';
import{ productDetailsReducer, productListReducer} from './reducers/productReducers';




const initialState = {
   
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
