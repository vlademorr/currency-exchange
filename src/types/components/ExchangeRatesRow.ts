import {IFavoriteCurrency, IReducerCurrency} from '..';

export interface ITablePropsRow {
  favoriteCurrency: (currency: string) => IFavoriteCurrency,
  currency: IReducerCurrency
}
