import React from 'react';
import {connect} from 'react-redux';

import CurrencyConverter from './CurrencyConverter';

import {ICurrencyConverter} from '../../types';

const CurrencyConverterContainer: React.FC<ICurrencyConverter> = ({
  exchangeRates,
  exchangeCurrency
}) => (
  <CurrencyConverter
    exchangeRates={exchangeRates}
    exchangeCurrency={exchangeCurrency}
  />
);

const mapStateToProps = ({exchangeRates, exchangeCurrency}: ICurrencyConverter) => ({
  exchangeRates,
  exchangeCurrency
});

export default connect(mapStateToProps)(CurrencyConverterContainer);
