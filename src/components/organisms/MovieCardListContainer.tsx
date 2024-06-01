import { FC, useState, useEffect } from "react";
import { Box, Typography, Pagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import MovieCardList from "../molecules/MovieCardList";
import SkeletonList from "../molecules/SkeletonList";
import { fetchPopularMovies } from "../../store/movieSlice";

/**
 * Functional Component MovieCardListContainer - Component that display a list of movie cards and a pagination component
 */
const MovieCardListContainer: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { movies, status } = useSelector((state: RootState) => state.movies);
  const isLoaded = status === "succeeded";
  const [page, setPage] = useState<number>(1);
  //NOTE: should use data.total_pages but TMBD said that petition only works with pages from 1 to 500
  const totalPages = 500;

  useEffect(() => {
    dispatch(fetchPopularMovies(page));
  }, [dispatch, page]);

  /**
   * @function - Function that handles the page change event for the pagination component
   * @param event - event type
   * @param value  - number Type
   */
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <Box>
      <Typography variant="h3" gutterBottom mt={6} mb={8}>
        Popular Movies
      </Typography>
      {isLoaded && movies ? (
        <MovieCardList movies={movies} />
      ) : (
        <SkeletonList count={6} />
      )}
      {isLoaded && (
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
      )}
    </Box>
  );
};

export default MovieCardListContainer;
