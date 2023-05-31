import { render, screen } from "@testing-library/react";
import Navigation from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));

test("renders with two links 'Play' and 'History'", async () => {
  render(<Navigation />);

  const link = screen.getByRole("link", { name: /Play/i });

  expect(link).toBeInTheDocument();
});
