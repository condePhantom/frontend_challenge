import { FC } from "react";
import { Typography } from "@mui/material";
/**
 * @interface HeroBannerDescriptionProps - Type for the HeroBannerDescription component
 * @property { string } description - The description text of the movie
 * @property { boolean} full - The flag that indicates if the width will be full or half.
 */
interface HeroBannerDescriptionProps {
  description: string;
  full: boolean;
}

/**
 * Functional Component HeroBannerDescription - Component that display the overview of the movie
 * @property {string} description - The description text to display
 * @property {boolean} full - The flag that indicate the full width
 */
const HeroBannerDescription: FC<HeroBannerDescriptionProps> = ({
  description,
  full = true,
}) => {
  return (
    <Typography
      sx={{ width: full ? "100%" : "50%", textAlign: "justify", mt: 3 }}
      variant="body1"
      color="white"
    >
      {description}
    </Typography>
  );
};

export default HeroBannerDescription;
