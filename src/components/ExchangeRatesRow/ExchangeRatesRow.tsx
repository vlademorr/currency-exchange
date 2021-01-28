import React, {useEffect, useState} from 'react';

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
    <tr>
      <td>{currency.currency}</td>
      <td>{Math.round(currency.rate * 100 + Number.EPSILON) / 100}</td>
      <td>
        <img
          src={favorite ? "/favorite.png" : "/unfavorite.png"}
          onClick={toggleFavorite}
          alt="favorite"
        />
      </td>
    </tr>
  )
};

export default ExchangeRatesRow;
