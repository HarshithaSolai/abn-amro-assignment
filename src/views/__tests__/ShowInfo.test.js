import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ShowInfo from "../ShowInfo";

describe("ShowInfo", () => {
  test("renders the ShowDetails and Seasons components", async () => {
    const mockShow = {
      id: 1,
      name: "Test Show",
      summary: "This is a test show",
      image: {
        medium: "https://example.com/image.jpg",
        original: "https://example.com/image_original.jpg",
      },
    };
    jest.spyOn(global, "fetch").mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockShow),
    });

    render(
      <MemoryRouter initialEntries={[`/show/${mockShow.id}`]}>
        <Routes>
          <Route path="/show/:id" element={<ShowInfo />} />
        </Routes>
      </MemoryRouter>
    );

    waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    expect(screen.getByText("No data found...")).toBeInTheDocument();

    waitFor(async () => {
      const showDetails = await screen.getByTestId("show-details");
      const seasons = await screen.getByTestId("seasons-details");
      
      expect(showDetails).toBeInTheDocument();
      expect(seasons).toBeInTheDocument();
      expect(screen.queryByText("Loading...")).toBeNull();
    });
  });
});
