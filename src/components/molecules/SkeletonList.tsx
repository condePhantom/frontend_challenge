import { FC } from "react";
import { Grid, Skeleton } from "@mui/material";

/**
 * @interface SkeletonListProps - Type for the SkeletonList component
 * @property { number } count - The amount of skeletons that will be rendered
 */
interface SkeletonListProps {
  count: number;
}

/**
 * Functional Component SkeletonList - Component that display a a List of Skeletons, the amount depends of the props count
 * @property {number} count - The number of skeletons that will be rendered
 */
const SkeletonList: FC<SkeletonListProps> = ({ count }) => {
  //just to create an array of the size of count to render the skeletons
  const array = ".".repeat(count).split("");
  return (
    <Grid container spacing={4}>
      {array.map((_n, i) => (
        <Grid
          item
          key={i}
          xs={12}
          sm={6}
          md={4}
          sx={{ height: "100%", padding: 0, mb: 3 }}
        >
          <Skeleton
            height={400}
            width={350}
            variant="rectangular"
            animation="pulse"
            sx={{
              backgroundColor: "rgba(255,255,255,0.10)",
              borderRadius: 6,
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default SkeletonList;
