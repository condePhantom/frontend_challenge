import { FC } from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Movie } from "../../types/Movie";

const image_url = import.meta.env.VITE_IMAGE_URL;

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  return (
    <Grid
      item
      key={movie.id}
      xs={12}
      sm={6}
      md={4}
      sx={{ height: "100%", padding: 0, mb: 3 }}
    >
      <Card
        sx={{ backgroundColor: "rgba(64,11,7, 0.6)", borderRadius: 6 }}
        elevation={2}
      >
        <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none" }}>
          <CardMedia
            component="img"
            height="330"
            image={`${image_url}/w300/${movie.poster_path}`}
            alt={movie.title}
            sx={{ objectFit: "contain" }}
          />
        </Link>
        <CardContent sx={{ p: 1 }}>
          <Typography variant="h6" component="p" color="white">
            {movie.title}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default MovieCard;
