import React from 'react';
import {connect} from 'react-redux';

import ExchangeRatesRow from './ExchangeRatesRow';

import {favoriteCurrency} from '../../redux/ducks/exchange';
import {IExchangeRatesRow} from '../../types/index';

const ExchangeRatesRowContainer: React.FC<IExchangeRatesRow> = ({favoriteCurrency, currency}) => (
  <ExchangeRatesRow
    currency={currency}
    favoriteCurrency={favoriteCurrency}
  />
);

const mapDispatchToProps = {
  favoriteCurrency
};

export default connect(null, mapDispatchToProps)(ExchangeRatesRowContainer);
