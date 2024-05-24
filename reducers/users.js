import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { token: null, username: null },
};

export const usersSlice = createSlice({
  name: "users",

  initialState,
  reducers: {
    addTokenToStore: (state, action) => {
      state.value.token = action.payload.token;
    },
    logout: (state) => {
      state.token = null;
    },
  },
});

export const { addTokenToStore, logout } = usersSlice.actions;
export default usersSlice.reducer;
