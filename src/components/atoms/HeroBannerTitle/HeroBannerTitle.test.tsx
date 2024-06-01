import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeroBannerTitle from "./HeroBannerTitle";

describe("HeroBannerTitle", () => {
  test("Renders the title of the hero banner", () => {
    const titleText = "This is a title";
    render(<HeroBannerTitle title={titleText} />);

    const title = screen.getByText(/This is a title/i);
    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe("H4");
  });
});
