import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {ListItemContainer} from "../styled/ExchsngeRatesListItem/style";
import {getFavorite, setFavorite as setFavoriteLocalStorage} from "../utils/favorites";
import {favoriteCurrency} from "../redux/ducks/actions";

const ExchangeRatesListItem = ({favoriteCurrency, currency}) => {
  const [favorite, setFavorite] = useState(false);
  useEffect(() => {
    if (!currency.currency) return;
    setFavorite(getFavorite(currency.currency));
}, [currency.currency]);
  const toggleFavorite = () => {
    setFavorite(!favorite);
    setFavoriteLocalStorage(currency.currency);
    favoriteCurrency(currency.currency)
};
  return (
    <ListItemContainer>
      <p>Currency: {currency.currency}</p>
      <p>Value: {Math.round(currency.rate * 100 + Number.EPSILON) / 100}</p>
      <img src={favorite ? "/favorite.png" : "/unfavorite.png"} onClick={toggleFavorite} alt="favorite" />
    </ListItemContainer>
  );
};

const mapDispatchToProps = {
  favoriteCurrency
};

export default connect(null, mapDispatchToProps)(ExchangeRatesListItem);

