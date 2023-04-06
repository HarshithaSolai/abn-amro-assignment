import React from "react";
import { render, screen } from "@testing-library/react";
import Seasons from "../Seasons";

describe("Seasons component", () => {
  test("renders the heading element with correct text", async () => {
    render(<Seasons showId={123} />);
    const loadingElement = screen.getByTestId("loading-state");
    expect(loadingElement).toBeInTheDocument();

    const headingElement = await screen.findByTestId("seasons-heading");
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent("Information about Seasons and Episodes");
  });
});
