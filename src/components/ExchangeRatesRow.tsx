import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import {favoriteCurrency} from '../redux/ducks/exchange';
import {ITablePropsRow} from '../types';
import {getFavorite, setFavorite as setFavoriteLocalStorage} from '../utils/favorites';

const ExchangeRatesRow: React.FC<ITablePropsRow> = ({favoriteCurrency, currency}) => {
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
  );
};

const mapDispatchToProps = {
  favoriteCurrency
};

export default connect(null, mapDispatchToProps)(ExchangeRatesRow);
