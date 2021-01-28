import Enzyme, {shallow} from 'enzyme';
import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import App from '../../App';

Enzyme.configure({adapter: new Adapter()});
const appMock = {
  fetchExchangeRates: jest.fn(),
  baseCurrency: {
    currency: 'USD',
    rate: 1,
    favorite: true
  }
};

it('expect to render App component', () => {
  expect(shallow(<App {...appMock}/>)).toMatchSnapshot();
});
