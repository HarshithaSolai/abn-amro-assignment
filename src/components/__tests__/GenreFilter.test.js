import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import GenreFilter from "../GenreFilter";

describe("GenreFilter", () => {
  const availableGenres = new Set(["Action", "Drama", "Comedy"]);
  const onGenreFilter = jest.fn();

  beforeEach(() => {
    onGenreFilter.mockClear();
  });

  test("renders correctly", () => {
    render(<GenreFilter availableGenres={availableGenres} onGenreFilter={onGenreFilter} />);
    expect(screen.getByTestId("genre-select")).toBeInTheDocument();
    expect(screen.getAllByRole("option")).toHaveLength(availableGenres.size + 1); // Add 1 for the "All" option
  });

  test("calls onGenreFilter when a genre is selected", () => {
    render(<GenreFilter availableGenres={availableGenres} onGenreFilter={onGenreFilter} />);
    const genreSelect = screen.getByTestId("genre-select");
    fireEvent.change(genreSelect, { target: { value: "Action" } });
    expect(onGenreFilter).toHaveBeenCalledTimes(1);
    expect(onGenreFilter).toHaveBeenCalledWith(expect.any(Object));
  });
});
