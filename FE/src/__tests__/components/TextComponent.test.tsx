import { render, screen } from "@testing-library/react";
import { TextComponent } from "../../components/TextComponent/TextComponent"; // Ensure this path is correct
import '@testing-library/jest-dom';

describe("TextComponent", () => {
  test("renders with text and variant", () => {
    render(<TextComponent text="Heading One" variant="heading1" />);
    const textElement = screen.getByText("Heading One");
    expect(textElement).toBeInTheDocument();
  });

  test("renders the component with link", () => {
    render(<TextComponent text="Text with link" variant="heading1" link="link"/>);

    const linkElement = screen.getByText("link");
    expect(linkElement).toBeInTheDocument();
  });

  test("render the component with custom color", () => {
    render(<TextComponent text="Text with custom color" variant="heading1" color="red"/>);

    const textElement = screen.getByText("Text with custom color");
    expect(textElement).toHaveStyle({ color: "red" });
  })

});