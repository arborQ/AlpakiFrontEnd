import { render, screen } from '@testing-library/react';
import App from './App';

test('renders have a new message', () => {
  render(<App />);
  const element = screen.getByText(/You have a new message!/i);
  expect(element).toBeInTheDocument();
});
