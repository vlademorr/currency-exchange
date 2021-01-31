import React from 'react';
import {Router} from 'react-router-dom';
import {render, fireEvent} from '@testing-library/react';
import {createMemoryHistory} from 'history';

import {Navbar} from '../../../components/index';

describe('Navbar', () => {
  it('is Navbar contain nav links', () => {
    const {getByText, getByRole} = render(<Navbar/>);
    const navbar = getByRole('navigation');
    const exchangeRatesLink = getByText('Exchange Rates');

    expect(navbar).toContainElement(exchangeRatesLink);
  });

  it('is Navbar change url', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Router history={history}>
        <Navbar/>
      </Router>
    );

    fireEvent.click(getByText('Exchange Rates'));
    expect(history.location.pathname).toEqual('/ExchangeRates');

    fireEvent.click(getByText('Currency Converter'));
    expect(history.location.pathname).toEqual('/CurrencyConverter');
  });
});
