import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

test("renders header, footer and routes", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const headerElement = getByTestId("header");
  expect(headerElement).toBeInTheDocument();

  const footerElement = getByTestId("footer");
  expect(footerElement).toBeInTheDocument();
});
