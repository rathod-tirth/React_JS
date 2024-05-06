import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './Features/Cart/cartSlice'
import modalSlice from './Features/Modal/modalSlice'

const store = configureStore({
   reducer: {
      cart: cartReducer,
      modal: modalSlice
   }
})

export default store