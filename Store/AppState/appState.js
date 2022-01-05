import { createSlice } from '@reduxjs/toolkit'

export const appState = createSlice({
  name: 'appstate',
  initialState: {
    creator: 'Agustin Wet',
    themeColor: '#1090ca',
    fontColor: '#fafafa'
  },
  reducers: {
    changeThemeColor: (state, action) => {
      state.themeColor = action.payload;
    },
    changeFontColor: (state, action) => {
      state.fontColor = action.payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const { changeThemeColor, changeFontColor } = appState.actions

export default appState.reducer