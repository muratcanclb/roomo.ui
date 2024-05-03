import { configureStore } from "@reduxjs/toolkit";
import roomsReducer from "../features/rooms/roomsSlice";
import {api} from "../features/rooms/api"
export const store = configureStore({
  reducer: {
    roomsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
