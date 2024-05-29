import { FC } from "react";
import { Rating, Box } from "@mui/material";
import { Star } from "@mui/icons-material";

interface HeroBannerRatingProps {
  rating: number;
}

const HeroBannerRating: FC<HeroBannerRatingProps> = ({ rating }) => {
  return (
    <Box display="flex" flexDirection="row">
      <Rating
        emptyIcon={<Star sx={{ color: "gray" }} />}
        name="ratingMovie"
        value={rating / 2}
        readOnly
        precision={0.1}
        max={5}
      />
      <Box sx={{ ml: 1, color: "white" }}>{rating.toFixed(1)}</Box>
    </Box>
  );
};

export default HeroBannerRating;
