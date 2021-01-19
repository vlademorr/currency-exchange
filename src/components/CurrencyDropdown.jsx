import React from 'react';
import {connect} from 'react-redux';
import {Dropdown} from 'react-bootstrap';

import {changeDefaultCurrency, changeExchangeCurrency} from '../redux/ducks/exchange';
import {DropdownCentered, DropdownScroll} from '../styled';

const DropdownCurrencyList = ({
  baseCurrency, 
  exchangeCurrency,
  exchangeRates, 
  changeDefaultCurrency,
  changeExchangeCurrency,
  currencyType
}) => {
  let currencyAction;
  let currencyValue = "";

  if (currencyType === "default") {
    currencyAction = changeDefaultCurrency
    currencyValue = baseCurrency.currency
  } else if (currencyType === "exchange") {
    currencyAction = changeExchangeCurrency
    currencyValue = exchangeCurrency.currency
  }

  return (
    <DropdownCentered>
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          {currencyValue}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <DropdownScroll>
            {
              exchangeRates.map(item => (
                (
                  <Dropdown.Item
                    key={item.currency}
                    onClick={() => currencyAction(item)}
                  >
                    {item.currency}
                  </Dropdown.Item>
                )
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
}) => (
  {
    baseCurrency,
    exchangeRates,
    exchangeCurrency
  }
);

const mapDispatchToProps = {
  changeDefaultCurrency,
  changeExchangeCurrency
};

export default connect(mapStateToProps, mapDispatchToProps)(DropdownCurrencyList);
