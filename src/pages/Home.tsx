import React, { useEffect, FC } from "react";
import { Container, Skeleton, Grid } from "@mui/material";
import EmptyLayout from "../components/layout/Empty";
import HeroBanner from "../components/molecules/HeroBanner";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { fetchPopularMovies } from "../store/movieSlice";
import { fetchGenresMovies } from "../store/genresSlice";
import MovieCardListContainer from "../components/organisms/MovieCardListContainer";

const Home: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { movies, status } = useSelector((state: RootState) => state.movies);

  console.log(movies);

  useEffect(() => {
    //First call is with page 1
    dispatch(fetchPopularMovies(1));
    dispatch(fetchGenresMovies());
  }, [dispatch]);

  const isLoaded = status === "succeeded";

  return (
    <div>
      <EmptyLayout>
        <Container>
          {isLoaded && movies ? (
            <HeroBanner movie={movies[0]} />
          ) : (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              sx={{ height: 600, color: "white" }}
            >
              <Skeleton
                variant="rectangular"
                animation="pulse"
                height={600}
                sx={{
                  backgroundColor: "rgba(255,255,255,0.10)",
                  width: { xs: 250, sm: 350, md: 500, lg: 1000 },
                }}
              />
            </Grid>
          )}
          <MovieCardListContainer />
        </Container>
      </EmptyLayout>
    </div>
  );
};

export default Home;
