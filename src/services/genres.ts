
import { get_api } from "./api";

import {  GenresResponse } from "../types/Genres";

/**
 * @function - Function to fetch the list of movie genres from the API
 * @returns {Promise<GenresResponse | null>} - The JSON response from the API or null if an error occurs
 * @throws - In case if the request fails an error will be return
 */
export const getGenresMovies = async (): Promise<GenresResponse | null> => {
  try {
    const result = await get_api(`genre/movie/list`);
    if (typeof result === 'string') {
      throw new Error('API response is a string instead of an expected object');
    }
    return result;
  } catch(error) {
    console.error("Error fetching data", error);
    return null;
  }
};

