import React, {useEffect, useState} from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import {IExchangeRatesRow} from '../../types/index';
import {getFavorite, setFavorite as setFavoriteLocalStorage} from '../../utils/favorites';

const ExchangeRatesRow: React.FC<IExchangeRatesRow> = ({favoriteCurrency, currency}) => {
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    if (!currency.currency) return;
    setFavorite(getFavorite(currency.currency));
  }, [currency.currency]);

  const toggleFavorite = () => {
    setFavorite(!favorite);
    setFavoriteLocalStorage(currency.currency);
    favoriteCurrency(currency.currency);
  };

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {currency.currency}
      </TableCell>
      <TableCell>{Math.round(currency.rate * 100 + Number.EPSILON) / 100}</TableCell>
      <TableCell align="right">
        <img
          src={favorite ? "/favorite.png" : "/unfavorite.png"}
          onClick={toggleFavorite}
          alt="favorite"
        />
      </TableCell>
    </TableRow>
  )
};

export default ExchangeRatesRow;
