import React from 'react';
import {connect} from 'react-redux';

import CurrencyChart from './CurrencyChart';

import {ICurrencyChart} from '../../types/index';

const CurrencyChartContainer: React.FC<ICurrencyChart> = ({exchangeRates, baseCurrency}) =>
  <CurrencyChart exchangeRates={exchangeRates} baseCurrency={baseCurrency} />;

const mapStateToProps = ({exchangeRates, baseCurrency}: ICurrencyChart) => ({
  exchangeRates,
  baseCurrency
});

export default connect(mapStateToProps)(CurrencyChartContainer);
