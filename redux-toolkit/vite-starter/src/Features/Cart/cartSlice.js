import { createSlice } from "@reduxjs/toolkit";
import cartItems from '../../cartItems'

const initialState = {
   cartItems,
   amount: 2,
   total: 0,
   isLoading: true,
}

const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      clearCart: (state) => {
         state.cartItems = []
         state.amount = 0
      },
      removeCart: (state, { payload }) => {
         state.cartItems = state.cartItems.filter((item) => item.id !== payload)
      },
      increase: (state, { payload }) => {
         const cartItems = state.cartItems.find((item) => item.id === payload)
         cartItems.amount += 1
      },
      decrease: (state, { payload }) => {
         const cartItems = state.cartItems.find((item) => item.id === payload)
         if (cartItems.amount > 0) {
            cartItems.amount -= 1
         }/* else {
            cartItems.amount -= 1
            state.cartItems = state.cartItems.filter((item) => item.id !== payload)
         }*/
      },
      calculateTotal: (state) => {
         let total = 0
         let amount = 0
         state.cartItems.forEach((item) => {
            amount += item.amount
            total += item.amount * item.price
         })
         state.amount = amount
         state.total = total
      }
   }
})

// console.log(cartSlice);
// console.log(cartSlice.getInitialState().isLoading);

export const { clearCart, removeCart, increase, decrease, calculateTotal } = cartSlice.actions
export default cartSlice.reducer