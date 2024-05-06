import { configureStore } from '@reduxjs/toolkit'

// import reducers which you want to add to the store
import cartReducer from './Features/Cart/cartSlice'
import modalSlice from './Features/Modal/modalSlice'

// define store
const store = configureStore({
   reducer: {
      cart: cartReducer,
      modal: modalSlice
   }
})

export default store

// State values in the store can be accessed throughout the app
// configureStore is used to add state values in our store