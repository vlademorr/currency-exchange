import React from 'react';
import {connect} from 'react-redux';

import CurrencyDropdown from './CurrencyDropdown';

import {changeDefaultCurrency, changeExchangeCurrency} from '../../redux/ducks/exchange';
import {ICurrencyDropdown, ICurrencyDropdownState} from '../../types/index';

const DropdownCurrencyContainer: React.FC<ICurrencyDropdown> = ({
  baseCurrency,
  currencyType,
  exchangeRates,
  exchangeCurrency,
  changeDefaultCurrency,
  changeExchangeCurrency
}) => (
  <CurrencyDropdown
    baseCurrency={baseCurrency}
    currencyType={currencyType}
    exchangeRates={exchangeRates}
    exchangeCurrency={exchangeCurrency}
    changeDefaultCurrency={changeDefaultCurrency}
    changeExchangeCurrency={changeExchangeCurrency}
  />
);

const mapStateToProps = ({
  baseCurrency,
  exchangeRates,
  exchangeCurrency
}: ICurrencyDropdownState) => ({
  baseCurrency,
  exchangeRates,
  exchangeCurrency
});

const mapDispatchToProps = {
  changeDefaultCurrency,
  changeExchangeCurrency
};

export default connect(mapStateToProps, mapDispatchToProps)(DropdownCurrencyContainer);
