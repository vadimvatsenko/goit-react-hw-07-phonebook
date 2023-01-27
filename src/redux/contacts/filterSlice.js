import { createSlice } from "@reduxjs/toolkit";

const filter = '';

const filtersSlice = createSlice({
  name: "filter",
  initialState: filter,

  reducers: {
    filterContacts(state, action) {
      return (state = action.payload)
    },
    

  },
});

export const { filterContacts } = filtersSlice.actions;
//обязательно дестуктуризировать
export const filterReducer = filtersSlice.reducer;

