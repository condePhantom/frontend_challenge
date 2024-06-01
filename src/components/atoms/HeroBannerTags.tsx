import { FC } from "react";
import { Box, Chip } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

/**
 * @interface HeroBannerTagsProps - Type for the HeroBannerTags component
 * @property { number[] } tags - An array of genres ids of the movie
 */
interface HeroBannerTagsProps {
  tags: number[];
}

/**
 * Functional Component HeroBannerTags - Component that display the genres of a movie
 * @property {number[]} tags - The tags genres of the movie
 */
const HeroBannerTags: FC<HeroBannerTagsProps> = ({ tags }) => {
  //Get the genres data from redux
  const { genres, status } = useSelector((state: RootState) => state.genres);
  let result = "-";

  /**
   * @function - Handles  the search of the label for genres from redux
   * @param {number} id - The id to search in the genres array
   * @returns {string}  - The name of the genre
   */
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
    <Box sx={{ width: "100%", textAlign: "left", my: 1 }}>
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
