import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeroBannerRating from "./HeroBannerRating";

describe("HeroBannerRating", () => {
  test("Renders the rating", () => {
    const ratingScore = 8.7;
    render(<HeroBannerRating rating={ratingScore} />);

    const rating = screen.getByRole("img", { hidden: true });
    expect(rating).toBeInTheDocument();

    const ratingValue = screen.getByText(ratingScore.toFixed(1));
    expect(ratingValue).toBeInTheDocument();

    expect(ratingValue).toHaveTextContent("8.7");
  });

  test("Renders empty stars when the rating is zero", () => {
    const ratingScore = 0;
    render(<HeroBannerRating rating={ratingScore} />);

    const rating = screen.getByRole("img", { hidden: true });
    expect(rating).toBeInTheDocument();

    const ratingValue = screen.getByText(ratingScore.toFixed(1));
    expect(ratingValue).toBeInTheDocument();
    expect(ratingValue).toHaveTextContent("0.0");
  });
});
