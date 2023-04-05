import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Season from '../Season';

describe('Season component', () => {
  test('displays season number and episode count', () => {
    const season = { number: 1, episodeOrder: 10, id: '123' };
    render(<Season season={season} />);

    const seasonTitle = screen.getByText(/Season : 1 \(10 episodes\)/i);
    expect(seasonTitle).toBeInTheDocument();
  });

});
