import { render, screen } from '@testing-library/react';
import App from './App';

test('renders react and tailwind text', () => {
  render(<App />);
  const linkElement = screen.getByText(/react and tailwind/i);
  expect(linkElement).toBeInTheDocument();
});
