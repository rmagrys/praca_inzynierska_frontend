import { render, screen } from '@testing-library/react';
import App from './App';

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };

describe('App component', () => {
  test('should render first page', () => {
    render(<App />);

    expect(screen.getByText(/zaloguj się/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/nazwa użytkownika/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: /zaloguj/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('checkbox', {
        name: /pamiętaj mnie/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', {
        name: /zarejestruj się teraz!/i,
      })
    ).toBeInTheDocument();
  });
});
