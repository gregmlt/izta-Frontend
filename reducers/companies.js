import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { id: null, siret: null },
};

export const companiesSlice = createSlice({
  name: "companies",

  initialState,
  reducers: {
    addCompanyToStore: (state, action) => {
      state.value = {
        id: action.payload.id,
        siret: action.payload.siret,
      };
    },
    deleteCompanyFromStore: (state) => {
      state.value = {
        id: null,
        siret: null,
      };
    },
  },
});

export const { addCompanyToStore, deleteCompanyFromStore } =
  companiesSlice.actions;
export default companiesSlice.reducer;
