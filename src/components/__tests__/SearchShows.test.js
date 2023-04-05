import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import SearchShows from '../SearchShows';

describe('SearchShows component', () => {
  test('renders the search input', () => {
    render(<SearchShows />);
    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();
  });

  test("displays the suggestions when the search input is focused", async () => {
    render(<SearchShows />);
  
    const searchInput = screen.getByTestId("search-input");
    const suggestionBox = screen.queryByTestId("suggestion-box");
    expect(suggestionBox).not.toBeInTheDocument();
  
    await userEvent.type(searchInput, "Friends");
    await waitFor(() => {
      expect(searchInput.value).toBe("Friends");
      expect(suggestionBox).not.toBeInTheDocument();
    });
  
    fireEvent.focus(searchInput);
  
    await waitFor(() => {
      expect(searchInput).toHaveFocus();
      const suggestionBox = screen.getByTestId("suggestion-box");
      expect(suggestionBox).toBeInTheDocument();
    });
  });
  
});
