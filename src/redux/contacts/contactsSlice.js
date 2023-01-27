import { createSlice } from "@reduxjs/toolkit";
//local storage 
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
//
const contactsInitialState = [];

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,

  reducers: {
    addContacts(state, action) {
      state.push(action.payload);
    },
    delContacts(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },

  },
});


export const contactsReducer = contactsSlice.reducer;

export const { addContacts, delContacts } = contactsSlice.actions;







