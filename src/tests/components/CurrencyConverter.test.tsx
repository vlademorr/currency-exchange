import Enzyme, {shallow} from 'enzyme';
import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import CurrencyConverter from '../../components/CurrencyConverter/CurrencyConverter';

Enzyme.configure({adapter: new Adapter()});

it('renders Currency Converter without crashing', () => {
  const mockProps = {
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
    }
  };

  expect(shallow(<CurrencyConverter {...mockProps}/>)).toMatchSnapshot();
});

it('renders Currency Converter with an empty array', () => {
  const mockProps = {
    exchangeRates: [],
    exchangeCurrency: {
      currency: 'USD',
      rate: 1,
      favorite: true
    }
  };

  expect(shallow(<CurrencyConverter {...mockProps}/>)).toMatchSnapshot();
});
