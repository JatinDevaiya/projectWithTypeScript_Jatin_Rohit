import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./redux/CounterSlice";
import { usersApi } from "./services/Users";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (aaa) => aaa().concat(usersApi.middleware),
});
