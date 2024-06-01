import { FC, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import DetailedMovieCard from "../atoms/DetailedMovieCard";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const MovieDetailContainer: FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { movies, status } = useSelector((state: RootState) => state.movies);
  const isLoaded = status === "succeeded";
  const movie = movies?.find((m) => m.id + "" === id);

  useEffect(() => {
    if (!id || !movies?.length) {
      navigate("/");
    }
  }, [id, navigate, movies]);

  //NOTE:

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        pt: { md: 8 },
      }}
    >
      {isLoaded && movies && movie ? (
        <DetailedMovieCard movie={movie} />
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
};

export default MovieDetailContainer;
