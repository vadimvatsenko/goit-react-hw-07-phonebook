import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addContacts(state, action) {
      state.items.push(action.payload);
    },
    delContacts(state, action) {
      const index = state.items.findIndex(contact => contact.id === action.payload);
      state.items.splice(index, 1);
    },
    // Выполнится в момент старта HTTP-запроса
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    // Выполнится если HTTP-запрос завершился успешно
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    // Выполнится если HTTP-запрос завершился с ошибкой
   fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

  },
});

export const { fetchingInProgress, fetchingSuccess, fetchingError, addContacts, delContacts } =
  contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;




