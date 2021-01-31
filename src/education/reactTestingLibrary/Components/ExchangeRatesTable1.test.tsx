import React from 'react';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import ExchangeRatesTable from '../../../components/ExchangeRatesTable/ExchangeRatesTable';

describe('ExchangeRatesTable', () => {
  it('is the loading rendered', () => {
    const props = {
      loading: true,
      baseCurrency: {
        currency: 'EUR',
        rate: 2,
        favorite: false
      },
      exchangeRates: []
    };

    render(<ExchangeRatesTable {...props}/>);

    expect(screen.queryByRole('table')).toBeNull();
  });

  it('is the component rendered', async () => {
    const initialState = {
      loading: false,
      baseCurrency: {
        currency: 'EUR',
        rate: 2,
        favorite: false
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
    const props = initialState;
    const mockStore = configureStore();
    const store = mockStore(initialState);

    render(<Provider store={store}><ExchangeRatesTable {...props} /></Provider>);

    expect(await screen.findByRole('table')).toBeInTheDocument();
  });
});
