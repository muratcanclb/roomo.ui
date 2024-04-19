import { configureStore } from "@reduxjs/toolkit";
//features import
export const store = configureStore({
  reducer: {
    //counter: counterReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
