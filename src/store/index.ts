import { configureStore } from "@reduxjs/toolkit";
import movieSlice from './movieSlice';
import genresSlice from "./genresSlice";
const store = configureStore({
  reducer: {
    movies: movieSlice.reducer,
    genres: genresSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;