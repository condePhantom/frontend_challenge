import { FC } from "react";
import EmptyLayout from "../components/layout/Empty";
import MovieDetailContainer from "../components/organisms/MovieDetailContainer";

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
