import { FC } from "react";
import MovieCard from "../atoms/MovieCard";
import { Movie } from "../../types/Movie";
import { Grid } from "@mui/material";

/**
 * @interface MovieCardListProps - Type for the MovieCardList component of a group of movies
 * @property { Movie[] } movies - The movies array of object containing all the details
 */
interface MovieCardListProps {
  movies: Movie[];
}

/**
 * Functional Component MovieCardList - Component that display a a List of MovieCard with the details of each movie
 * @property movies - Movie[] Type
 */
const MovieCardList: FC<MovieCardListProps> = ({ movies }) => {
  return (
    <Grid container spacing={4}>
      {movies?.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </Grid>
  );
};
export default MovieCardList;
