import { FC } from "react";
import { Typography } from "@mui/material";

interface HeroBannerDescriptionProps {
  description: string;
}

const HeroBannerDescription: FC<HeroBannerDescriptionProps> = ({
  description,
}) => {
  return (
    <Typography
      sx={{ width: "50%", textAlign: "justify" }}
      variant="body1"
      color="white"
    >
      {description}
    </Typography>
  );
};

export default HeroBannerDescription;
