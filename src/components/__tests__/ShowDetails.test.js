import React from "react";
import { render, screen } from "@testing-library/react";
import ShowDetails from "../ShowDetails";
import { act } from 'react-dom/test-utils';

describe("ShowDetails", () => {
  const testData = {
    name: "Test Show",
    summary: "<p>Test summary</p>",
    language: "English",
    rating: { average: 8.5 },
    type: "Scripted",
    status: "Running",
    network: { name: "Test Network" },
    runtime: 60,
    genres: ["Action", "Drama"],
    image: { medium: "http://test-image.com" },
  };

  test("renders the show details correctly", () => {
    render(<ShowDetails {...testData} />);

    expect(screen.getByText(testData.name)).toBeInTheDocument();
    expect(screen.getByTestId("summary")).toHaveProperty('innerHTML', testData.summary);
    expect(screen.getByTestId("genres")).toHaveTextContent("Genres: Action, Drama");
    expect(screen.getByTestId("language")).toHaveTextContent("Language: English");
    expect(screen.getByTestId("rating")).toHaveTextContent("Rating: 8.5");
    expect(screen.getByTestId("runtime")).toHaveTextContent("Runtime: 60 min");
    expect(screen.getByTestId("type")).toHaveTextContent("Type: Scripted");
    expect(screen.getByTestId("status")).toHaveTextContent("Status: Running");
    expect(screen.getByTestId("network")).toHaveTextContent("Network: Test Network");
    expect(screen.getByAltText(testData.name)).toHaveAttribute(
      "src",
      testData.image.medium
    );
  });
});
