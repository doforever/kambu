import MaxTransaction from './MaxTransaction';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

test('has transation name', () => {
  render(<Provider store={store}><MaxTransaction /></Provider>);
  expect(screen.getByRole('heading', { level: 3 })).toBeTruthy();
  expect(screen.getByRole('heading', { level: 3 }).textContent?.length).toBeGreaterThan(0);
});

