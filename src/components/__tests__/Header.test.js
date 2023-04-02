import React from "react";
import { render } from "@testing-library/react";
import Header from "../Header";

test("should render app title with correct text content", () => {
  const { getByTestId } = render(<Header />);
  const appTitle = getByTestId("app-title");

  expect(appTitle.textContent).toEqual("ABN AMRO Assignment");
});
