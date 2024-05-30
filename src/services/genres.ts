
import { get_api } from "./api";

import {  GenresResponse } from "../types/Genres";


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

