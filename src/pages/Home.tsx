import React, { useEffect, useState, FC } from "react";
import { Container, Box, Typography, Pagination } from "@mui/material";
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
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    getPopularMovies(page).then((data) => {
      if (data) {
        setMovies(data.results);
        setBannerMovie(data.results[0]);
        //NOTE: should use data.total_pages but TMBD said that petition only works with pages from 1 to 500
        setTotalPages(500);
      }
    });
  }, [page]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };
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
          <Box display="flex" justifyContent="center" mt={4}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={handlePageChange}
              showFirstButton
              showLastButton
              boundaryCount={2}
              siblingCount={2}
              shape="rounded"
              variant="outlined"
              size="large"
              sx={{
                "& .MuiPaginationItem-root": {
                  color: "#fff",
                },
                "& .MuiPaginationItem-root.Mui-selected": {
                  backgroundColor: "rgba(64,11,7,1)",
                  borderColor: "red",
                },
                "& button:hover": {
                  borderColor: "red",
                },
              }}
            />
          </Box>
        </Container>
      </EmptyLayout>
    </div>
  );
};

export default Home;
