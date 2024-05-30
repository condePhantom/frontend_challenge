
import { get_api } from "./api";
import {  PopularMoviesResponse } from '../types/Movie';


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