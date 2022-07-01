import { createSlice } from '@reduxjs/toolkit'

const initialState = {
AppEssential:[]
}

const HomeFeatures = createSlice({
  name: "HomeFeatures",
  initialState,
  reducers: {
     setAppEssential:(state,action)=>{
      state.AppEssential.push(action.payload)
     }
  }
});

export const {
  
} = HomeFeatures.actions
export const selectAppEssential = state => state.HomeFeatures.AppEssential
export default HomeFeatures.reducer