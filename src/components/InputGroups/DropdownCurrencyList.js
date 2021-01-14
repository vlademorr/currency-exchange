import React from "react";
import {connect} from "react-redux";
import {DropdownButton, Dropdown} from "react-bootstrap";
import {changeDefaultCurrency, changeExchangeCurrency} from "../../redux/ducks/actions";

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
    <DropdownButton id="dropdown-basic-button" title={currencyValue}>
     {
      exchangeRates.map((item) => {
        return (
          <Dropdown.Item
            key={item.currency}
            onClick={() => currencyAction(item)}
          >
            {item.currency}
          </Dropdown.Item>
        )
      })
      }
    </DropdownButton>
  );
};
const mapStateToProps = ({
  baseCurrency,
  exchangeRates,
  exchangeCurrency
}) => {
  return {
    baseCurrency,
    exchangeRates,
    exchangeCurrency
  };
};


const mapDispatchToProps = {
  changeDefaultCurrency,
  changeExchangeCurrency
};

export default connect(mapStateToProps, mapDispatchToProps)(DropdownCurrencyList);
