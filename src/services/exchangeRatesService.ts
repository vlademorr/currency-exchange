import {getFavorite} from '../utils/favorites';

export const getExchangeRates = (payload: string) =>
  fetch('https://api.exchangeratesapi.io/latest?base=' + payload)
    .then(resp => resp.json())
    .then(({rates}) => {
      return Object.keys(rates).map(item => ({
        currency: item,
        rate: rates[item],
        favorite: getFavorite(item)
      }));
    });
