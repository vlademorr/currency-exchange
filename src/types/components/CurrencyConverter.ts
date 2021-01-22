import {IReducerCurrency} from '..';

export interface ICurrencyConverter {
  exchangeRates: IReducerCurrency[],
  exchangeCurrency: IReducerCurrency
};
