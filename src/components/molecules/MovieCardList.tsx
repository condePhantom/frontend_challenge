import { FC } from "react";
import MovieCard from "../atoms/MovieCard";
import { Movie } from "../../types/Movie";
import { Grid } from "@mui/material";

interface MovieCardListProps {
  movies: Movie[];
}
const MovieCardList: FC<MovieCardListProps> = ({ movies }) => {
  return (
    <Grid container spacing={4}>
      {movies?.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </Grid>
  );
};
export default MovieCardList;
