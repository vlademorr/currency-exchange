import {IFetchExchangeRates, IReducerCurrency} from '..';

export interface IAppState {
  baseCurrency: IReducerCurrency
}

export interface IApp {
  fetchExchangeRates: (baseCurrency: string) => IFetchExchangeRates,
  baseCurrency: IReducerCurrency
}
