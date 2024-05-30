import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    token: null,
    username: null,
    likedCompanies: null,
    kudos: null,
    verification: false,
  },
};

export const usersSlice = createSlice({
  name: "users",

  initialState,
  reducers: {
    switchVerification: (state, action) => {
      state.value.verification = action.payload;
    },
    addTokenToStore: (state, action) => {
      state.value.token = action.payload.token;

      if (action.payload.likedCompanies) {
        state.value.likedCompanies = action.payload.likedCompanies;
      }
      if (action.payload.kudos) {
        state.value.kudos = action.payload.kudos;
      }
    },
    logout: (state) => {
      state.value.token = null;
    },
    addLikedCompany: (state, action) => {
      state.value.likedCompanies.push(action.payload);
    },
    removeLikedCompany: (state, action) => {
      state.value.likedCompanies = state.value.likedCompanies.filter(
        (company) => company !== action.payload
      );
    },
    addKudo: (state, action) => {
      state.value.kudos.push(action.payload);
    },
    removeKudo: (state, action) => {
      state.value.kudos = state.value.kudos.filter(
        (kudo) => kudo !== action.payload
      );
    },
  },
});

export const {
  switchVerification,
  addTokenToStore,
  logout,
  addLikedCompany,
  removeLikedCompany,
  addKudo,
  removeKudo,
} = usersSlice.actions;
export default usersSlice.reducer;
