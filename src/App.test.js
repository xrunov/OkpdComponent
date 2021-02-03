import { render, screen } from '@testing-library/react';
import okpd from './Okpd';

test('renders learn react link', () => {
  render(<okpd />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
