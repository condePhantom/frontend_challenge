import { FC } from "react";
import { Typography } from "@mui/material";

interface HeroBannerDescriptionProps {
  description: string;
  full: boolean;
}

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
