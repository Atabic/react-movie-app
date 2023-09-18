
import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import MovieList from './src/components/MovieList';

// Mock the fetch function to simulate a successful API response
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ results: [] }), // Replace with sample API response
    ok: true,
  })
);

test('fetches data from TMDB API and renders it', async () => {
  render(<MovieList />); // Render the component

  // Wait for the component to make the API request and update the UI
  await waitFor(() => {
    expect(screen.get('Loading...')).toBeInTheDocument(); // Check for loading message
  });

  // Verify that the data from the API is rendered correctly
  expect(screen.getByText('Rating:')).toBeInTheDocument(); // Replace with your actual UI elements

  // Optionally, you can add more assertions to validate the rendered data
});
