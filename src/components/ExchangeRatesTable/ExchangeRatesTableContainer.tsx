import React from 'react';
import {connect} from 'react-redux';

import ExchangeRatesTable from './ExchangeRatesTable';

import {ITableProps} from '../../types/index';

const ExchangeRatesTableContainer: React.FC<ITableProps> = ({
  loading,
  baseCurrency,
  exchangeRates
}) => (
  <ExchangeRatesTable
    loading={loading}
    baseCurrency={baseCurrency}
    exchangeRates={exchangeRates}
  />
);

const mapStateToProps = ({
  loading,
  baseCurrency,
  exchangeRates,
}: ITableProps) => ({
  loading,
  baseCurrency,
  exchangeRates,
});

export default connect(mapStateToProps)(ExchangeRatesTableContainer);
