import { FC } from "react";
import { Card, CardMedia, CardContent } from "@mui/material";
import { Movie } from "../../types/Movie";
import HeroBannerTitle from "./HeroBannerTitle";
import HeroBannerDescription from "./HeroBannerDescription";
import HeroBannerRating from "./HeroBannerRating";
import HeroBannerTags from "./HeroBannerTags";

const image_url = import.meta.env.VITE_IMAGE_URL;

interface DetailedMovieCardProps {
  movie: Movie;
}
const DetailedMovieCard: FC<DetailedMovieCardProps> = ({ movie }) => {
  const { title, vote_average, poster_path, overview, genre_ids } = movie;

  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          maxHeight: { sm: "100%", md: 800 },
          maxWidth: "100%",
          backgroundColor: "rgb(81, 38, 34)",
          color: "white",
          "@media (max-width: 768px)": {
            flexDirection: "column",
          },
        }}
      >
        <CardMedia
          sx={{
            width: "50%",
            "@media (max-width: 768px)": {
              width: "100%",
              height: "auto",
            },
          }}
          component="img"
          image={`${image_url}/w500/${poster_path}`}
          alt={title}
        />
        <CardContent sx={{ flex: "1 0", padding: 3, overflow: "hidden" }}>
          <HeroBannerTitle title={title} />
          <HeroBannerRating rating={vote_average} />
          <HeroBannerTags tags={genre_ids} />
          <HeroBannerDescription description={overview} full />
        </CardContent>
      </Card>
    </>
  );
};

export default DetailedMovieCard;
