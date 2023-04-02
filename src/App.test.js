import React from "react";
import { render, getByTestId} from "@testing-library/react";
import App from "./App";

test("renders header and footer", () => {
  const { getByTestId } = render(<App />);
  const headerElement = getByTestId("header");
  expect(headerElement).toBeInTheDocument();

  const footerElement = getByTestId("footer");
  expect(footerElement).toBeInTheDocument();
});
