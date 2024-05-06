import { createSlice } from "@reduxjs/toolkit"

// defaultState
const initialState = {
   isOpen: false
}

// define slice
const modalSlice = createSlice({
   name: 'modal',
   initialState,
   reducers: {
      openModal: (state) => {
         state.isOpen = true
      },
      closeModal: (state) => {
         state.isOpen = false
      }
   }
})

// exporting actions and reducer
export const { openModal, closeModal } = modalSlice.actions
export default modalSlice.reducer