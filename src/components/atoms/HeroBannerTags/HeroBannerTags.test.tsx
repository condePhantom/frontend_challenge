import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeroBannerTags from "./HeroBannerTags";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { RootState } from "../../../store";

// Create a simulation of the state of redux
const state: RootState = {
  genres: {
    genres: [
      {
        id: 28,
        name: "Action",
      },
      {
        id: 12,
        name: "Adventure",
      },
      {
        id: 16,
        name: "Animation",
      },
      {
        id: 35,
        name: "Comedy",
      },
    ],
    status: "succeeded",
    error: null,
  },
  movies: {
    movies: [],
    status: "idle",
    error: null,
    totalPages: 1,
  },
};

// create a simulated store with the state created above
const mockStore = configureStore();
const store = mockStore(state);

describe("HeroBannerTags", () => {
  it("Renders genre tags provided by the ids", () => {
    const tags = [16, 28];

    render(<Provider store={store}>{<HeroBannerTags tags={tags} />}</Provider>);

    expect(screen.getByText("Action")).toBeInTheDocument();
    expect(screen.getByText("Animation")).toBeInTheDocument();
    expect(screen.queryByText("Comedy")).not.toBeInTheDocument();
  });
});
