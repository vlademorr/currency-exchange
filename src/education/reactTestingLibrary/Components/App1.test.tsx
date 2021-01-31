import React from 'react';
import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import App from '../../../App';

describe('App', () => {
  const props = {
    baseCurrency: {
      currency: 'EUR',
      rate: 2,
      favorite: false
    },
    fetchExchangeRates: jest.fn()
  };
  const initialState = {
    loading: false,
    error: false,
    baseCurrency: {
      currency: 'EUR',
      rate: 2,
      favorite: false
    },
    exchangeCurrency: {
      currency: 'USD',
      rate: 1,
      favorite: true
    },
    exchangeRates: [
      {
        currency: 'EUR',
        rate: 1,
        favorite: false
      },
      {
        currency: 'USD',
        rate: 2,
        favorite: true
      },
      {
        currency: 'RUB',
        rate: 3,
        favorite: false
      }
    ]
  };

  it('Correct display of the required components', async () => {
    const mockStore = configureStore();
    const store = mockStore(initialState);
    const {container, findByRole} = render(
      <Provider store={store}>
        <App {...props}/>
      </Provider>
    );

    expect(container.innerHTML).toMatch('Currency Exchange');
    expect(await findByRole('table')).toBeInTheDocument();
  });
});
