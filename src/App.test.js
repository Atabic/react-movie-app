import { render, screen } from '@testing-library/react';
import App from './App';

test('renders react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/React/i);
  expect(linkElement).toBeInTheDocument();
});


test('render Rating in Movie List', () => {
  render(<App />);
  const linkElement = screen.getByText(/Rating/i);
  expect(linkElement).toBeInTheDocument();
});
