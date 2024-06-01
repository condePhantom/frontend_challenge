/**
 * @interface Moview - Type for movie
 * @property { number } id - The id of the movie
 * @property { string } title - The title of the movie
 * @property { string } poster_path - The path of the image of the movie
 * @property { string } overview - The description of the movie
 * @property { number } vote_average - The score of the movie
 * @property { number[] } genre_ids - An array of ids of genres
 */
export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  vote_average: number;
  genre_ids: number[];
}

/**
 * @interface PopularMoviesResponse - Type for the popular movies response from API
 * @property { number } page - The current page of the request to API
 * @property { Movie[] } results - An array of movies from API
 * @property { number } total_pages - The total page of the request to API
 * @property { number } total-results - The total amount of pages in the API
 */
export interface PopularMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}