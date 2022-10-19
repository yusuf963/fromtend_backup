import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

test("render the home component on the dom", () => {
  render(<Home />);
  expect(
    screen.getByText("Welcome toPopular Concert Venue")
  ).toBeInTheDocument();
  // const heading = screen.getByRole("heading", { name: "Welcome toPopular Concert Venue" });
  // expect(heading).toBeInTheDocument();
});


describe("Home Compo", () => {
  test("render the home component and find the image", () => {
    render(<Home />);
    const image = screen.getByRole("img", {
      name: "Concert goer with hands in the shape of a heart",
    });
    expect(image).toBeInTheDocument();
  });
})
