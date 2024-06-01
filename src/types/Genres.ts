/**
 * @interface Genre - Type for the genre movie
 * @property { number } id - The id of the genre
 * @property { string } name - The name of the genre
 */
export interface Genre {
  id: number;
  name: string;
}

/**
 * @interface GenreResponde - Type for the genre response from API
 * @property { Genre[] } genres - An array of genres from API
 */
export interface GenresResponse {
  genres: Genre[];
}