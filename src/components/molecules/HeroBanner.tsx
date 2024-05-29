import { FC } from "react";

import { Grid, Card, Box, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import HeroBannerDescription from "../atoms/HeroBannerDescription";
import HeroBannerTags from "../atoms/HeroBannerTags";
import HeroBannerTitle from "../atoms/HeroBannerTitle";
import HeroBannerRating from "../atoms/HeroBannerRating";
const image_url = import.meta.env.VITE_IMAGE_URL;
import { Movie } from "../../types/Movie";

interface HeroBannerProps {
  movie: Movie;
}

const HeroBanner: FC<HeroBannerProps> = ({ movie }) => {
  const theme = useTheme();
  const isXS = useMediaQuery(theme.breakpoints.down("sm"));

  const {
    id,
    genre_ids: tags,
    title,
    overview: description,
    poster_path: image,
    vote_average: rating,
  } = movie;

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} sx={{ height: 600 }}>
      <Link to={`/movie/${id}`} style={{ textDecoration: "none" }}>
        <Card
          sx={{
            backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 1) ${
              isXS ? "40%" : "65%"
            }, transparent), url(${image_url}/original/${image})`,
            width: "100%",
            height: "100%",
            display: "flex",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
            "& > div": {
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              paddingLeft: "10px",
            },
          }}
        >
          <Box ml={2}>
            <HeroBannerTitle title={title} />
            <HeroBannerTags tags={tags} />
            <HeroBannerRating rating={rating} />
            <HeroBannerDescription description={description} />
          </Box>
        </Card>
      </Link>
    </Grid>
  );
};

export default HeroBanner;
