import { createSlice } from "@reduxjs/toolkit";
import { fetchContatcts } from "./operations";
import { addContacts } from "./operations";
import { deleteContacts } from "./operations";

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
    // Добавляем обработку внешних экшенов
  extraReducers: {
     [addContacts.pending](state) {
      state.isLoading = true;
    },
    [addContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchContatcts.pending](state) {
      state.isLoading = true;
    },
    [fetchContatcts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContatcts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [deleteContacts.pending](state) {
      state.isLoading = true;
    },
    [deleteContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    
  },
});


export const contactsReducer = contactsSlice.reducer;

//export const { fetchingInProgress, fetchingSuccess, fetchingError, addContacts, delContacts } =
//   contactsSlice.actions;

// const contactsSlice = createSlice({
//   name: "tasks",
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   reducers: {
//     addContacts(state, action) {
//       state.items.push(action.payload);
//     },
//     delContacts(state, action) {
//       const index = state.items.findIndex(contact => contact.id === action.payload);
//       state.items.splice(index, 1);
//     },
//     // Выполнится в момент старта HTTP-запроса
//     fetchingInProgress(state) {
//       state.isLoading = true;
//     },
//     // Выполнится если HTTP-запрос завершился успешно
//     fetchingSuccess(state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//     },
//     // Выполнится если HTTP-запрос завершился с ошибкой
//    fetchingError(state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },

//   },
// });

