import {IFavoriteCurrency, IReducerCurrency} from '..';

export interface IExchangeRatesRow {
  favoriteCurrency: (currency: string) => IFavoriteCurrency,
  currency: IReducerCurrency
}
