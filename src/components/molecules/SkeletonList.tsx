import { FC } from "react";
import { Grid, Skeleton } from "@mui/material";

interface SkeletonListProps {
  count: number;
}
const SkeletonList: FC<SkeletonListProps> = ({ count }) => {
  //just to create an array of the size of count to render the skeletons
  const array = ".".repeat(count).split("");
  return (
    <Grid container spacing={4}>
      {array.map((n, i) => (
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
