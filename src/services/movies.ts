
import { get_api } from "./api";
import { Movie } from '../types/Movie';

export const getPopularMovies = async (): Promise<Movie[]> => {
  try {
    const result = await get_api('movie/popular?page=1');
    if (typeof result === 'string') {
      throw new Error('La respuesta de la API es una cadena en lugar de un objeto esperado');
    }
    //NOTE: check this error
    return result.results;
  } catch(error) {
    console.error("Error fetching data", error);
    return [];
  }
};

export const getMovieDetails = async (id: string): Promise<Movie | null> => {
  try{
    const result = await get_api(`movie/${id}`);
    if (typeof result === 'string') {
      throw new Error('La respuesta de la API es una cadena en lugar de un objeto esperado');
    }
    return result.results;
  } catch(error){
    console.error("Error fetching movie details")
    return null;
  }
};