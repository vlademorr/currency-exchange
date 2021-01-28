import React from 'react';
import {Dropdown} from 'react-bootstrap';

import {DropdownCentered, DropdownScroll} from '../../styled/index';
import {
  ICurrencyDropdown,
  IReducerCurrency,
  IChangeCurrency
} from '../../types/index';

const DropdownCurrency: React.FC<ICurrencyDropdown> = ({
  baseCurrency,
  currencyType,
  exchangeRates,
  exchangeCurrency,
  changeDefaultCurrency,
  changeExchangeCurrency
}) => {
  let currencyAction: (currency: IReducerCurrency) => IChangeCurrency;
  let currencyValue = '';

  if (currencyType === 'default') {
    currencyAction = changeDefaultCurrency;
    currencyValue = baseCurrency.currency;
  } else if (currencyType === 'exchange') {
    currencyAction = changeExchangeCurrency;
    currencyValue = exchangeCurrency.currency;
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

export default DropdownCurrency;
