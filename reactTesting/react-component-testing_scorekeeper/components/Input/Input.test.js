import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  render(<Input placeholder="text" name="sth" />);

  const pHolder = screen.getByPlaceholderText("text");

  expect(pHolder).toBeInTheDocument();
  expect(pHolder).toHaveAttribute("name", "sth");
});

test("calls callback on every user input", async () => {
  const input = jest.fn();
  await userEvent.click(screen.getByRole("button", ["click"]));
  expect(input).toHaveBeenCalledTimes(3);
});
