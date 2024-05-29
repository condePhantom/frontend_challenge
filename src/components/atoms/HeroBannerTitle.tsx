import { FC } from "react";
import { Typography } from "@mui/material";

interface HeroBannerTitleProps {
  title: string;
}
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
