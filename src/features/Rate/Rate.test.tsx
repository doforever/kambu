import Rate from './Rate';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

test('has correct header', () => {
  render (<Provider store={store}><Rate /></Provider>);
  expect(screen.getByRole('heading')).toHaveTextContent('Exchange rate');
});

