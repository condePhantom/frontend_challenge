import React, { useEffect, useState, FC } from "react";
import { Container, Typography } from "@mui/material";
import EmptyLayout from "../components/layout/Empty";
import HeroBanner from "../components/molecules/HeroBanner";
import MovieCardList from "../components/molecules/MovieCardList";
import { Movie } from "../types/Movie";
import { getPopularMovies } from "../services/movies";

const Home: FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [bannerMovie, setBannerMovie] = useState<Movie>({
    id: 0,
    title: "",
    poster_path: "",
    overview: "",
    vote_average: 0,
    genre_ids: [],
  });

  useEffect(() => {
    getPopularMovies().then((data) => {
      if (data) {
        setMovies(data);
        setBannerMovie(data[0]);
      }
    });
  }, []);
  console.log(movies);

  return (
    <div>
      <EmptyLayout>
        <Container sx={{ py: 0, mt: 8 }}>
          <HeroBanner movie={bannerMovie} />
          <Typography variant="h3" component="h2" gutterBottom mt={4}>
            Popular Movies
          </Typography>
          <MovieCardList movies={movies} />
        </Container>
      </EmptyLayout>
    </div>
  );
};

export default Home;
