import { FC } from "react";
import { Box, Chip } from "@mui/material";

interface HeroBannerTagsProps {
  tags: number[];
}

const HeroBannerTags: FC<HeroBannerTagsProps> = ({ tags }) => {
  //NOTE: get from redux
  return (
    <Box sx={{ width: "50%", textAlign: "left", mb: 1 }}>
      {tags?.map((tag: number, index: number) => (
        <Chip
          label={"Supernatural"}
          key={tag + index}
          variant="outlined"
          size="small"
          color="error"
          sx={{ m: "4px" }}
        />
      ))}
    </Box>
  );
};

export default HeroBannerTags;
