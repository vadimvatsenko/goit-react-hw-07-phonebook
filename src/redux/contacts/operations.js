import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";



axios.defaults.baseURL = "https://63d3e9f8a93a149755b5ebb6.mockapi.io/api/v1";

export const fetchContatcts = createAsyncThunk(
  "tasks/fetchAll",
  // Используем символ подчеркивания как имя первого параметра,
  // потому что в этой операции он нам не нужен
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      // При успешном запросе возвращаем промис с данными
      return response.data;
    } catch (e) {
      // При ошибке запроса возвращаем промис
      // который будет отклонен с текстом ошибки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);





//OLD
// import {
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
// } from "./contactsSlice";
// export const fetchContatcts = () => async dispatch => {
//     try {
//     // Индикатор загрузки
//     dispatch(fetchingInProgress());
//     // HTTP-запрос
//     const response = await axios.get("/contacts");
//     // Обработка данных
//     dispatch(fetchingSuccess(response.data));
//   } catch (e) {
//     // Обработка ошибки
//     dispatch(fetchingError(e.message));
//   }
// };

// fetchTasks();