import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Movie } from '../types/Movie'
import { getPopularMovies } from "../services/movies";

/**
 * @interface MovieState - Type for the state structure for movies
 * @property { Movie[] } movies - An array of movie objects
 * @property { string] } status - The current status of fetching movies
 * @property { string | null } error - Any error message during the process
 * @property { number | undefined } totalPages - The total amount of pages from the API
 */
interface MovieState {
  movies: Movie[] | undefined;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  totalPages: number | undefined;
}

/**
 * The initial state variable
 */
const initialState: MovieState = {
  movies: [],
  status: 'idle',
  error: null,
  totalPages: 1
}

/**
 * Async thunk to fetch movies
 */
export const fetchPopularMovies = createAsyncThunk(
  "movies/fetchPopularMovies",
  async (page: number) => {
    const response = await getPopularMovies(page);
    return response;
  }
)

/**
 * Slice for managing movie genres
 */
const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies = action.payload?.results;
        state.totalPages = action.payload?.total_pages
      })
      .addCase(fetchPopularMovies.rejected, (state,action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong :("
      });
  },
});

export default moviesSlice