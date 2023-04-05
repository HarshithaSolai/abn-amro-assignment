import { render, screen, fireEvent } from '@testing-library/react';
import Episode from '../Episode';

const episode = {
  number: 1,
  name: 'Episode Name',
  summary: '<p>Episode summary</p>',
  rating: { average: 8.5 },
  type: 'Episode Type',
  network: { name: 'Episode Network' },
  runtime: 60
};

describe('Episode component', () => {
  test('renders episode details correctly when isVisible is true', () => {
    const setIsVisible = jest.fn();
    render(<Episode episode={episode} setIsVisible={setIsVisible} isVisible={true} />);
    expect(screen.getByText(`Episode : ${episode.number} ${episode.name}`)).toBeInTheDocument();
    expect(screen.getByTestId('episode-summary')).toHaveProperty('innerHTML', episode.summary);
    expect(screen.getByTestId('episode-rating')).toHaveTextContent(`Rating: ${episode.rating.average}`);
    expect(screen.getByTestId('episode-type')).toHaveTextContent(`Type: ${episode.type}`);
    expect(screen.getByTestId('episode-network')).toHaveTextContent(`Network: ${episode.network.name}`);
    expect(screen.getByTestId('episode-runtime')).toHaveTextContent(`Runtime: ${episode.runtime} min`);
  });

  test('hides episode details when isVisible is false', () => {
    const setIsVisible = jest.fn();
    render(<Episode episode={episode} setIsVisible={setIsVisible} isVisible={false} />);
    expect(screen.queryByText(`Episode : ${episode.number} ${episode.name}`)).toBeInTheDocument();
    expect(screen.queryByTestId('episode-summary')).not.toBeInTheDocument();
    expect(screen.queryByTestId('episode-rating')).not.toBeInTheDocument();
    expect(screen.queryByTestId('episode-type')).not.toBeInTheDocument();
    expect(screen.queryByTestId('episode-network')).not.toBeInTheDocument();
    expect(screen.queryByTestId('episode-runtime')).not.toBeInTheDocument();
  });

  test('toggles episode details when arrow is clicked', () => {
    const setIsVisible = jest.fn();
    const isVisible = true;
    render(<Episode episode={episode} setIsVisible={setIsVisible} isVisible={isVisible} />);
    fireEvent.click(screen.getByTestId(isVisible ? 'episode-arrow-up' : 'episode-arrow-down'));
    expect(setIsVisible).toHaveBeenCalledWith(false);
    
  });
});
