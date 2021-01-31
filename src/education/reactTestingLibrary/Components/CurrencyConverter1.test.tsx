import React from 'react';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import CurrencyConverter from '../../../components/CurrencyConverter/CurrencyConverter';

describe('Currency Converter', () => {
  const initialState = {
    loading: false,
    error: false,
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
    ],
    baseCurrency: {
      currency: 'EUR',
      rate: 2,
      favorite: false
    },
    exchangeCurrency: {
      currency: 'EUR',
      rate: 2,
      favorite: false
    }
  };
  const props = initialState;

  it('is the Currency Converter rendered', () => {
    const mockStore = configureStore();
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <CurrencyConverter {...props}/>
      </Provider>
    );

    expect(screen.getByText('Currency Converter')).toBeInTheDocument();
  });

  it('is the loading rendered', () => {
    initialState.exchangeRates = [];
    const mockStore = configureStore();
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <CurrencyConverter {...props}/>
      </Provider>
    );

    expect(screen.queryByRole('button')).toBeNull();
  });
});
