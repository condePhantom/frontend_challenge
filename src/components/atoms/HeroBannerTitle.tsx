import { FC } from "react";
import { Typography } from "@mui/material";

/**
 * @interface HeroBannerTitleProps - Type for the HeroBannerTitle component
 * @property { string } title - The title text of the movie
 */
interface HeroBannerTitleProps {
  title: string;
}

/**
 * Functional Component HeroBannerTitle - Component that display the title of the movie
 * @property {string } title - The title text of the movie
 */
const HeroBannerTitle: FC<HeroBannerTitleProps> = ({ title }) => {
  return (
    <Typography
      variant="h4"
      color="white"
      sx={{ width: { xs: "50%", sm: "100%" }, textAlign: "left", mb: 2 }}
    >
      {title}
    </Typography>
  );
};

export default HeroBannerTitle;
