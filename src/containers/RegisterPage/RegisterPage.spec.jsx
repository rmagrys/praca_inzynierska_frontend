import { render, screen } from '@testing-library/react';
import RegisterPage from './RegisterPage';
import { Routes, Route, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('RegisterPage component', () => {
  test('should render RegisterPage', async () => {
    const history = createMemoryHistory();
    const route = '/register';
    history.push(route);
    render(
      <Router location={history.location} navigator={history}>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Router>
    );

    expect(
      await screen.findByRole('textbox', {
        name: /e-mail/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/^hasło/i)).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', {
        name: /nazwa/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', {
        name: /imię/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', {
        name: /nazwisko/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', {
        name: /telefon/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: /zarejestruj/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', {
        name: /zaloguj się teraz!/i,
      })
    ).toBeInTheDocument();
  });
});
