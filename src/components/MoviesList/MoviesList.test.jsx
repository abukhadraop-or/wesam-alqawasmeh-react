import React from 'react';
import { render, screen } from '@testing-library/react';
import MoviesList from './MoviesList';

// const mockRes = {
//   results: [
//     {
//       id: 675353,
//       overview: 'After settling in Green Hills, Sonic is eager to prove he...',
//       poster_path: '/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg',
//       rate: 7.5,
//       release_date: '2022-04-08',
//       title: 'Sonic the Hedgehog 2',
//     },
//     {
//       id: 634649,
//       overview: 'After settling in Green Hills, Sonic is eager to prove he...',
//       poster_path: null,
//       rate: 8.5,
//       release_date: '2021-12-17',
//       title: 'Spider-Man: No Way Home',
//     },
//   ],
// };

// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () => Promise.resolve(mockRes),
//   })
// );

describe('<MoviesList />', () => {
  it('Renders 20 movie card after fetching', async () => {
    render(<MoviesList sortBy="popularity.desc" />);
    const movieCards = await screen.findAllByTestId('movie-card');
    expect(movieCards.length).toBe(20);
  });

  it('Renders broken images for movies', async () => {
    render(<MoviesList sortBy="popularity.asc" />);
    const movieImages = await screen.findAllByTestId('movie-img');
    const brokenImages = screen.queryAllByTestId('broken-img');
    expect(brokenImages.length).toEqual(20 - movieImages.length);
  });

  it('Renders movie description', async () => {
    render(<MoviesList sortBy="popularity.desc" />);
    const description = await screen.findAllByTestId('description');
    expect(description.length).toBe(20);
  });
});
