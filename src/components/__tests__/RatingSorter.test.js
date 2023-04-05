import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import RatingSorter from "../RatingSorter";

describe("RatingSorter", () => {
  const sortOrder = "desc";
  const onSortOrder = jest.fn();

  beforeEach(() => {
    onSortOrder.mockClear();
  });

  test("renders correctly", () => {
    render(<RatingSorter sortOrder={sortOrder} onSortOrder={onSortOrder} />);
    expect(screen.getByTestId("rating-sorter")).toBeInTheDocument();
    expect(screen.getAllByRole("option")).toHaveLength(2);
  });

  test("calls onSortOrder when the sort order is changed", () => {
    render(<RatingSorter sortOrder={sortOrder} onSortOrder={onSortOrder} />);
    const ratingSelect = screen.getByTestId("rating-sorter");
    fireEvent.change(ratingSelect, { target: { value: "asc" } });
    expect(onSortOrder).toHaveBeenCalledTimes(1);
    expect(onSortOrder).toHaveBeenCalledWith(expect.any(Object));
  });
});
