import { FC } from "react";
import { Box, Chip } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

interface HeroBannerTagsProps {
  tags: number[];
}

const HeroBannerTags: FC<HeroBannerTagsProps> = ({ tags }) => {
  const { genres, status } = useSelector((state: RootState) => state.genres);
  let result = "-";
  console.log(genres);

  const findLabel = (id: number): string => {
    if (genres) {
      const match = genres.find((f) => f.id === id);
      if (match) {
        result = match.name;
      }
    }
    return result;
  };
  const isLoaded = status === "succeeded";
  return isLoaded ? (
    <Box sx={{ width: "50%", textAlign: "left", mb: 1 }}>
      {tags?.map((tag: number, index: number) => (
        <Chip
          label={findLabel(tag)}
          key={tag + index}
          variant="outlined"
          size="small"
          color="error"
          sx={{ m: "4px" }}
        />
      ))}
    </Box>
  ) : null;
};

export default HeroBannerTags;
