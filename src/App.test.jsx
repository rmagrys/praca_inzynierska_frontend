import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('should render login page', () => {
    render(<App />);

    expect(screen.getByText(/zaloguj się/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/e-mail/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: /zaloguj/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('link', {
        name: /zarejestruj się teraz!/i,
      })
    ).toBeInTheDocument();
  });
});
