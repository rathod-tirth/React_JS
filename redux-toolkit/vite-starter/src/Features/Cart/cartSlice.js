import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = 'https://www.course-api.com/react-useReducer-cart-project'

export const getCartItems = createAsyncThunk('cart/getCartItems', async () => {
   try {
      const resp = await axios(url);
      return resp.data;
   } catch (err) {
      return console.log(err);
   }
})

const initialState = {
   cartItems: [],
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
         const cartItems = state.cartItems.find((item) => item.id === payload.id)
         cartItems.amount += 1
      },
      decrease: (state, { payload }) => {
         const cartItems = state.cartItems.find((item) => item.id === payload.id)
         cartItems.amount -= 1
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
   },
   extraReducers: (builder) => {
      builder
         .addCase(getCartItems.pending, (state) => {
            state.isLoading = true
         })
         .addCase(getCartItems.fulfilled, (state, actions) => {
            state.cartItems = actions.payload
            state.isLoading = false
         })
         .addCase(getCartItems.rejected, (state) => {
            state.isLoading = false
         })
   }
})

// console.log(cartSlice);
// console.log(cartSlice.getInitialState().isLoading);

export const { clearCart, removeCart, increase, decrease, calculateTotal } = cartSlice.actions
export default cartSlice.reducer