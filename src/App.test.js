import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(new RegExp("I was changed on the feature branch!"));
  expect(linkElement).toBeInTheDocument();
});
