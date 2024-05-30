import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Genre } from "../types/Genres";
import { getGenresMovies } from "../services/genres";


interface MovieState {
  genres: Genre[] | undefined;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: MovieState = {
  genres: [],
  status: 'idle',
  error: null,
}

export const fetchGenresMovies = createAsyncThunk(
  "genres/fetchGenresMovies",
  async () => {
    const response = await getGenresMovies();
    return response;
  }
)

const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenresMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGenresMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.genres = action.payload?.genres;
      })
      .addCase(fetchGenresMovies.rejected, (state,action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong :("
      });
  },
});

export default genresSlice