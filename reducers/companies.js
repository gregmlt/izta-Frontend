import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { hasACompany: false },
};

export const companiesSlice = createSlice({
  name: "companies",

  initialState,
  reducers: {
    putCompanyToUser: (state, action) => {
      state.value = {
        hasACompany: true,
      };
    },
    deleteCompanyFromUser: (state) => {
      state.value = {
        hasACompany: false,
      };
    },
  },
});

export const { putCompanyToUser, deleteCompanyFromUser } =
  companiesSlice.actions;
export default companiesSlice.reducer;
