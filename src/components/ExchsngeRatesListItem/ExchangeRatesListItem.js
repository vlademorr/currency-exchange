import React from "react";
import {ListItemContainer} from "./style";

const ExchangeRatesListItem = ({currency}) => {
  return(
    <ListItemContainer>
      <p>Currency: {currency.currency}</p>
      <p>Value: {currency.value}</p>
    </ListItemContainer>
  )
}

export default ExchangeRatesListItem