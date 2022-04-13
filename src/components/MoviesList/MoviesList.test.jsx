import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import MoviesList from './MoviesList';

const mockRes = {
  results: [
    {
      id: 675353,
      overview: 'After settling in Green Hills, Sonic is eager to prove he...',
      poster_path: '/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg',
      rate: 7.5,
      release_date: '2022-04-08',
      title: 'Sonic the Hedgehog 2',
    },
    {
      id: 634649,
      overview: 'After settling in Green Hills, Sonic is eager to prove he...',
      poster_path: null,
      rate: 8.5,
      release_date: '2021-12-17',
      title: 'Spider-Man: No Way Home',
    },
  ],
};

const fetchRes = () =>
  new Promise((resolve) => {
    resolve({
      json: () => Promise.resolve(mockRes),
    });
  });

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockResolvedValue(fetchRes());
});

afterEach(() => {
  global.fetch.mockClear();
});

describe('<MoviesList />', () => {
  it('Renders 2 movie card after fetching', async () => {
    render(<MoviesList sortBy="popularity.desc" />);
    const movieCards = await screen.findAllByTestId('movie-card');
    expect(movieCards.length).toBe(2);
  });

  it('Renders broken images for movies', async () => {
    render(<MoviesList sortBy="popularity.asc" />);
    const movieImages = await screen.findAllByTestId('movie-img');
    const brokenImages = screen.queryAllByTestId('broken-img');
    expect(movieImages.length).toBe(1);
    expect(brokenImages.length).toEqual(1);
  });

  it('Renders movie description', async () => {
    render(<MoviesList sortBy="popularity.desc" />);
    const description = await screen.findAllByTestId('description');
    expect(description.length).toBe(2);
  });

  it('Throw an error for unsuccessful fetch', () => {
    jest.spyOn(global, 'fetch').mockRejectedValue('error');
    render(<MoviesList sortBy="popularity.asc" />);
    const movies = screen.queryAllByTestId('movie-card');
    expect(movies).toEqual([]);
  });
});
