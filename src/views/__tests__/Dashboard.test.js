import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '../Dashboard';

describe('Dashboard', () => {
  const mockData = [
    {
      id: 1,
      name: 'Stranger Things',
      genres: ['Drama', 'Fantasy', 'Horror'],
      rating: { average: 8.7 },
    },
    {
      id: 2,
      name: 'Breaking Bad',
      genres: ['Crime', 'Drama', 'Thriller'],
      rating: { average: 9.5 },
    },
  ];

  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('renders the search box', () => {
    render(<Dashboard />);
    const searchBox = screen.getByTestId('search-box');
    expect(searchBox).toBeInTheDocument();
  });

  test('renders the genre filter dropdown', () => {
    render(<Dashboard />);
    const genreFilter = screen.getByTestId('genre-filter');
    expect(genreFilter).toBeInTheDocument();
  });

  test('renders the rating sorter dropdown', () => {
    render(<Dashboard />);
    const ratingSorter = screen.getByTestId('rating-sorter');
    expect(ratingSorter).toBeInTheDocument();
  });

  test('renders shimmer component while data is loading', () => {
    jest.spyOn(global, 'fetch').mockResolvedValueOnce(new Promise(() => {}));
    render(<Dashboard />);
    const shimmer = screen.getByTestId('shimmer');
    expect(shimmer).toBeInTheDocument();

  });


});
