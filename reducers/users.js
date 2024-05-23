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
  },
});

export const { addTokenToStore } = usersSlice.actions;
export default usersSlice.reducer;
