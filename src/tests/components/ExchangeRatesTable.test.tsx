import Enzyme, {shallow} from 'enzyme';
import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import ExchangeRatesTable from '../../components/ExchangeRatesTable/ExchangeRatesTable';

Enzyme.configure({adapter: new Adapter()});

it('renders Exchange Rates Table without crashing', () => {
  const mockProps = {
    loading: false,
    baseCurrency: {
      currency: 'USD',
      rate: 1,
      favorite: false
    },
    exchangeRates: [
      {
        currency: 'USD',
        rate: 2,
        favorite: false
      },
      {
        currency: 'EUR',
        rate: 2,
        favorite: true
      },
      {
        currency: 'RUB',
        rate: 2,
        favorite: false
      }
    ]
  };

  expect(shallow(<ExchangeRatesTable {...mockProps}/>)).toMatchSnapshot();
});

it('renders Exchange Rates Table loading', () => {
  const mockProps = {
    loading: true,
    baseCurrency: {
      currency: 'USD',
      rate: 1,
      favorite: false
    },
    exchangeRates: [
      {
        currency: 'USD',
        rate: 2,
        favorite: false
      },
      {
        currency: 'EUR',
        rate: 2,
        favorite: true
      },
      {
        currency: 'RUB',
        rate: 2,
        favorite: false
      }

    ]
  };

  expect(shallow(<ExchangeRatesTable {...mockProps}/>)).toMatchSnapshot();
});
