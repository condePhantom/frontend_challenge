import { useEffect, FC } from "react";
import {
  Container,
  Skeleton,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import EmptyLayout from "../components/layout/Empty";
import HeroBanner from "../components/molecules/HeroBanner";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { fetchPopularMovies } from "../store/movieSlice";
import { fetchGenresMovies } from "../store/genresSlice";
import MovieCardListContainer from "../components/organisms/MovieCardListContainer";
import DetailedMovieCard from "../components/molecules/DetailedMovieCard";

/**
 * Functional Component Home - The main page of the app that displays popular movies with a hero banner
 */
const Home: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  //Get the movies data from redux
  const { movies, status } = useSelector((state: RootState) => state.movies);
  const theme = useTheme();
  const lowerMD = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    //First call is with page 1
    dispatch(fetchPopularMovies(1));
    //Get the genres catalog
    dispatch(fetchGenresMovies());
  }, [dispatch]);

  const isLoaded = status === "succeeded";

  return (
    <div>
      <EmptyLayout>
        <Container>
          {!lowerMD ? (
            isLoaded && movies ? (
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
            )
          ) : (
            isLoaded && movies && <DetailedMovieCard movie={movies[0]} />
          )}
          <MovieCardListContainer />
        </Container>
      </EmptyLayout>
    </div>
  );
};

export default Home;
