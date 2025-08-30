import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import cartReducer from '../features/cart/cartSlice'
import filtercategoryReducer from '../features/filtercategory/filtercategorySlice'



export default configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    filtercategory: filtercategoryReducer
    
  }
})