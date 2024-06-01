import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeroBannerDescription from "./HeroBannerDescription";

const descriptionText = "This is a description movie text.";
describe("HeroBannerDescription", () => {
  test("Renders the description text", () => {
    render(<HeroBannerDescription description={descriptionText} full={true} />);

    const description = screen.getByText(descriptionText);
    expect(description).toBeInTheDocument();
    expect(description).toHaveStyle("width: 100%");
  });

  test("Renders the description text with half width", () => {
    render(
      <HeroBannerDescription description={descriptionText} full={false} />
    );

    const description = screen.getByText(descriptionText);
    expect(description).toBeInTheDocument();
    expect(description).toHaveStyle("width: 50%");
  });
});
