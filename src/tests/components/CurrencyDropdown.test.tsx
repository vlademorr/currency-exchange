import Enzyme, {shallow} from 'enzyme';
import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import CurrencyDropdown from '../../components/CurrencyDropdown/CurrencyDropdown';

Enzyme.configure({adapter: new Adapter()});

it('renders Currency Dropdown with default currency type', () => {
  const mockProps = {
    baseCurrency: {
      currency: 'EUR',
      rate: 2,
      favorite: false
    },
    currencyType: 'default',
    exchangeRates: [
      {
        currency: 'USD',
        rate: 1,
        favorite: true
      },
      {
        currency: 'EUR',
        rate: 2,
        favorite: false
      },
      {
        currency: 'RUB',
        rate: 3,
        favorite: true
      }
    ],
    exchangeCurrency: {
      currency: 'USD',
      rate: 1,
      favorite: true
    },
    changeDefaultCurrency: jest.fn(),
    changeExchangeCurrency: jest.fn()
  };

  expect(shallow(<CurrencyDropdown {...mockProps}/>)).toMatchSnapshot();
});

it('renders Currency Dropdown with exchange currency type', () => {
  const mockProps = {
    baseCurrency: {
      currency: 'EUR',
      rate: 2,
      favorite: false
    },
    currencyType: 'exchange',
    exchangeRates: [
      {
        currency: 'USD',
        rate: 1,
        favorite: true
      },
      {
        currency: 'EUR',
        rate: 2,
        favorite: false
      },
      {
        currency: 'RUB',
        rate: 3,
        favorite: true
      }
    ],
    exchangeCurrency: {
      currency: 'USD',
      rate: 1,
      favorite: true
    },
    changeDefaultCurrency: jest.fn(),
    changeExchangeCurrency: jest.fn()
  };

  expect(shallow(<CurrencyDropdown {...mockProps}/>)).toMatchSnapshot();
});
