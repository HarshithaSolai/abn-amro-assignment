import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from '../Dashboard';

describe('Dashboard component', () => {
  it('renders the component and displays shimmer when shows are not available', async () => {
    render(<Dashboard />);

    const shimmer = screen.getByTestId('shimmer');
    expect(shimmer).toBeInTheDocument();
    expect(screen.queryAllByTestId('show-card')).toHaveLength(0);

    await waitFor(() => expect(screen.queryByTestId('shimmer')).not.toBeInTheDocument());
  });

  it('renders the component with available shows and updates based on genre filter', async () => {
    const mockShows = [
      { id: 1, name: 'Show 1', genres: ['genre1', 'genre2'], rating: { average: 8.0 } },
      { id: 2, name: 'Show 2', genres: ['genre2', 'genre3'], rating: { average: 9.0 } },
      { id: 3, name: 'Show 3', genres: ['genre3'], rating: { average: 7.0 } },
    ];

    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockShows),
      })
    );

    render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );

    await waitFor(() => expect(screen.queryByTestId('shimmer')).not.toBeInTheDocument());

    expect(screen.queryAllByTestId('show-card')).toHaveLength(3);

    const select = screen.getByRole('combobox', { name: 'Genre Filter' });
    expect(select).toBeInTheDocument();

    userEvent.selectOptions(select, 'genre2');

    expect(screen.queryAllByTestId('show-card')).toHaveLength(2);
    expect(screen.queryAllByTestId('show-card')[0]).toHaveTextContent('Show 1');
    expect(screen.queryAllByTestId('show-card')[1]).toHaveTextContent('Show 2');

    jest.restoreAllMocks();
  });
});
