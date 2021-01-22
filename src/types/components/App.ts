import {IFetchExchangeRates, IReducerCurrency} from '..';

export interface IApp {
  fetchExchangeRates: (baseCurrency: string) => IFetchExchangeRates,
  baseCurrency: IReducerCurrency
};
