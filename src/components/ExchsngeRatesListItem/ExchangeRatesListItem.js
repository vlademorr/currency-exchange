import React from "react";
import {ListItemContainer} from "./style";

const ExchangeRatesListItem = ({currency}) => {
  return(
    <ListItemContainer>
      <p>{currency.cc} - {currency.txt}: </p>
      <p>{currency.rate}</p>
    </ListItemContainer>
  )
}

export default ExchangeRatesListItem