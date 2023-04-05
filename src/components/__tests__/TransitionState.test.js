import { render, screen } from "@testing-library/react";
import { TransitionState } from "../transitionState";

test("default error", () => {
  render(<TransitionState />);
  const error = screen.getByTestId("default");
  expect(error).toBeInTheDocument();
  expect(error).toHaveTextContent("Unforseen error...");
});

test("api error", () => {
  render(<TransitionState type="error-state" />);
  const error = screen.getByTestId("error-state");
  expect(error).toBeInTheDocument();
  expect(error).toHaveTextContent("Something went wrong...");
});

test("api loading", () => {
  render(<TransitionState type="loading-state" />);
  const loading = screen.getByTestId("loading-state");
  expect(loading).toBeInTheDocument();
  expect(loading).toHaveTextContent("Loading...");
});

test("no data", () => {
  render(<TransitionState type="no-data" />);
  const noData = screen.getByTestId("no-data");
  expect(noData).toBeInTheDocument();
  expect(noData).toHaveTextContent("No data found...");
});
