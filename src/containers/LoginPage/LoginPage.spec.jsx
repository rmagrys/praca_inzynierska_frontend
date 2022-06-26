import { render, screen } from '@testing-library/react';
import LoginPage from './LoginPage';
import { Routes, Route, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('LoginPAge component', () => {
  test('should render LoginPage', async () => {
    const history = createMemoryHistory();
    const route = '/login';
    history.push(route);
    render(
      <Router location={history.location} navigator={history}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    );

    expect(await screen.findByText(/zaloguj się/i)).toBeInTheDocument();
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
