import {IReducerCurrency} from '..';

export interface ICurrencyChart {
  exchangeRates: IReducerCurrency[],
  baseCurrency: IReducerCurrency
}
