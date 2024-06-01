import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Genre } from "../types/Genres";
import { getGenresMovies } from "../services/genres";

/**
 * @interface GenreState - Type for the state structure for genres
 * @property { Genre[] } genres - An array of genres ids
 * @property { string] } status - The current status of fetching movie genres
 * @property { string | null } error - Any error message during the process
 */
interface GenreState {
  genres: Genre[] | undefined;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

/**
 * The initial state variable
 */
const initialState: GenreState = {
  genres: [],
  status: 'idle',
  error: null,
}

/**
 * Async thunk to fetch genres movies
 */
export const fetchGenresMovies = createAsyncThunk(
  "genres/fetchGenresMovies",
  async () => {
    const response = await getGenresMovies();
    return response;
  }
)

/**
 * Slice for managing movie genres
 */
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