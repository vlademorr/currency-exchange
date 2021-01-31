import React from 'react';
import {render, screen} from '@testing-library/react';

import CurrencyDropdown from '../../../components/CurrencyDropdown/CurrencyDropdown';

describe('Currency Dropdown types', () => {
  const props = {
    currencyType: '',
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
      currency: 'USD',
      rate: 2,
      favorite: false
    },
    changeDefaultCurrency: jest.fn(),
    changeExchangeCurrency: jest.fn()
  };

  it('Currency Dropdown default type render', () => {
    props.currencyType = 'default';
    render(<CurrencyDropdown {...props}/>);
    expect(screen.getByText(props.baseCurrency.currency)).toBeInTheDocument();
  });

  it('Currency Dropdown exchange type render', () => {
    props.currencyType = 'exchange';
    render(<CurrencyDropdown {...props}/>);
    expect(screen.getByText(props.exchangeCurrency.currency)).toBeInTheDocument();
  });
});
