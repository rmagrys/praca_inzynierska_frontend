import { render, screen } from '@testing-library/react';
import AddAuction from './AddAuction';

describe('AddAuction component', () => {
  test('should Add auction main pane', () => {
    render(<AddAuction />);

    expect(
      screen.getByRole('heading', { name: /kup teraz/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /licytacja standardowa/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /licytacja w ciemno/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /aukcja malejąca/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: /zapisz przedmiot/i,
      })
    ).toBeInTheDocument();
  });
});
