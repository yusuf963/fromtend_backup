import { render, screen } from "@testing-library/react";
import UserProfile from "@/pages/user";


describe("User Compo", () => {
  test("user component should display hello on the DOM", () => {
    render(<UserProfile />);
    expect(screen.getByText("hello")).toBeInTheDocument();
  });
});
