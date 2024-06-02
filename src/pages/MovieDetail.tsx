import { FC } from "react";
import EmptyLayout from "../components/layout/Empty";
import MovieDetailContainer from "../components/organisms/MovieDetailContainer";

/**
 * Functional Component MovieDetail - The Movie detail page that display a container with the movie detail component
 */
const MovieDetail: FC = () => {
  return (
    <div>
      <EmptyLayout>
        <MovieDetailContainer />
      </EmptyLayout>
    </div>
  );
};

export default MovieDetail;
