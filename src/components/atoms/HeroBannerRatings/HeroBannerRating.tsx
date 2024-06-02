import { FC } from "react";
import { Rating, Box } from "@mui/material";
import { Star } from "@mui/icons-material";

/**
 * @interface HeroBannerRatingProps - Type for the HeroBannerRating component
 * @property { number } rating - The rating amount of the movie
 */
interface HeroBannerRatingProps {
  rating: number;
}

/**
 * Functional Component HeroBannerRating - Component that display the rating of the movie with stars
 * @property {number} rating - The rating amount ot the movie
 */
const HeroBannerRating: FC<HeroBannerRatingProps> = ({ rating }) => {
  return (
    <Box display="flex" flexDirection="row" mt={1}>
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
