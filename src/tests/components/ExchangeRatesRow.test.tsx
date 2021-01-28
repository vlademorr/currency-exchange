import Enzyme, {shallow} from 'enzyme';
import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import ExchangeRatesRow from '../../components/ExchangeRatesRow/ExchangeRatesRow';

Enzyme.configure({adapter: new Adapter()});

it('renders Exchange Rates Row without crashing', () => {
  const mockProps = {
    currency: {
      currency: 'EUR',
      rate: 2,
      favorite: false
    },
    favoriteCurrency: jest.fn()
  };

  expect(shallow(<ExchangeRatesRow {...mockProps}/>)).toMatchSnapshot();
});

it('renders Exchange Rates Row with false currency.currency', () => {
  const mockProps = {
    currency: {
      currency: '',
      rate: 2,
      favorite: false
    },
    favoriteCurrency: jest.fn()
  };

  expect(shallow(<ExchangeRatesRow {...mockProps}/>)).toMatchSnapshot();
});
