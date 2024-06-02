import { render, screen } from "@testing-library/react";
import LoginHeader from "./LoginFormHeader";
import "@testing-library/jest-dom";

describe("LoginHeader component", () => {
  it("Renders header correctly", () => {
    const logo = "logo.png";
    const titleText = "This is a header";

    render(<LoginHeader logo={logo} title={titleText} />);

    const avatar = screen.getByAltText("FinSphera Logo");
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute("src", logo);

    const title = screen.getByText(/This is a header/i);
    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe("DIV");
  });
});
