import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value : {
    name: "Ai Anshu",
    email: "",
    local: false
  }
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    init: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.vale.name = action.payload.name
      state.value.email = action.payload.email
    },
    checkLocal: (state) => {
      console.log('checking for localStorage')
      if(localStorage.getItem('user') !== null) {
        state.value.local = true
      }
    },
    setLocal: (state, action) => {
      state.value.name = action.payload.name
      state.value.email = action.payload.email
      localStorage.setItem("user", JSON.stringify(action.payload))
      state.value.local = true
    },
  },
})

// Action creators are generated for each case reducer function
export const { init, checkLocal, setLocal } = counterSlice.actions

export default counterSlice.reducer