import React from 'react';
import {connect} from 'react-redux';
import {Dropdown} from 'react-bootstrap';

import {changeDefaultCurrency, changeExchangeCurrency} from '../redux/ducks/exchange';
import {DropdownCentered, DropdownScroll} from '../styled';
import {
  ICurrencyDropdown, 
  IReducer,
  IReducerCurrency, 
  IChangeCurrency
} from '../types';

const DropdownCurrencyList: React.FC<ICurrencyDropdown> = ({
  baseCurrency, 
  exchangeRates, 
  exchangeCurrency,
  changeDefaultCurrency,
  changeExchangeCurrency,
  currencyType
}) => {
  let currencyAction: (currency: IReducerCurrency) => IChangeCurrency;
  let currencyValue = '';

  if (currencyType === 'default') {
    currencyAction = changeDefaultCurrency;
    currencyValue = baseCurrency.currency;
  } else if (currencyType === 'exchange') {
    currencyAction = changeExchangeCurrency;
    currencyValue = exchangeCurrency.currency;
  };

  return (
    <DropdownCentered>
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          {currencyValue}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <DropdownScroll>
            {
              exchangeRates.map((item: IReducerCurrency) => (
                <Dropdown.Item
                  key={item.currency}
                  onClick={() => currencyAction(item)}
                >
                  {item.currency}
                </Dropdown.Item>
              ))
            }
            </DropdownScroll>
        </Dropdown.Menu>
      </Dropdown>
    </DropdownCentered>
  );
};

const mapStateToProps = ({
  baseCurrency,
  exchangeRates,
  exchangeCurrency
}: IReducer): {
  baseCurrency: IReducerCurrency, 
  exchangeRates: IReducerCurrency[], 
  exchangeCurrency: IReducerCurrency
} => ({
  baseCurrency,
  exchangeRates,
  exchangeCurrency
});

const mapDispatchToProps = {
  changeDefaultCurrency,
  changeExchangeCurrency
};

export default connect(mapStateToProps, mapDispatchToProps)(DropdownCurrencyList);
