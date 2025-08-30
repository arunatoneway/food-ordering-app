import { createSlice } from '@reduxjs/toolkit'



export const filtercategorySlice = createSlice({
  name: 'filtercategory',
  initialState: {
    value: ""
  },
  reducers: {
    
    categoryclicked: (state, action) => {
      state.value = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { categoryclicked } = filtercategorySlice.actions

export default filtercategorySlice.reducer