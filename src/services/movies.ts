
import { get_api } from "./api";
import {  PopularMoviesResponse } from '../types/Movie';



/**
 * @function - Function to fetch the list of a movie from the API
 * @param {number} page - The page number of the results to fetch, it defaults to 1 if not provided to avoid errors
 * @returns {Promise<PopularMoviesResponse | null>} The JSON response from the API or null if an erorr ocurrs
 */
export const getPopularMovies = async (page: number =1): Promise<PopularMoviesResponse | null> => {
  try {
    const result = await get_api(`movie/popular?page=${page}`);
    if (typeof result === 'string') {
      throw new Error('API response is a string instead of an expected object');
    }
    return result;
  } catch(error) {
    console.error("Error fetching data", error);
    return null;
  }
};

//NOTE: this was not used because the getPopularMovies brings the necessary data
/**
 * @function - Function to fetch the details of a movie from the API
 * @param {number} id - The id of the movie to request the details in the API
 * @returns {Promise<PopularMoviesResponse | null>} The JSON response from the API or null if an erorr ocurrs
 */
export const getMovieDetails = async (id: string): Promise<PopularMoviesResponse | null> => {
  try{
    const result = await get_api(`movie/${id}`);
    if (typeof result === 'string') {
      throw new Error('API response is a string instead of an expected object');
    }
    return result;
  } catch(error){
    console.error("Error fetching movie details")
    return null;
  }
};