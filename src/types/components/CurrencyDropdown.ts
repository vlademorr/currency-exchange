import {IChangeDefaultCurrency, IChangeExchangeCurrency, IReducerCurrency} from '..';

export interface ICurrencyDropdown {
  baseCurrency: IReducerCurrency, 
  exchangeRates: IReducerCurrency[], 
  exchangeCurrency: IReducerCurrency,
  changeDefaultCurrency: (baseCurrency: IReducerCurrency) => IChangeDefaultCurrency,
  changeExchangeCurrency: (exchangeCurrency: IReducerCurrency) => IChangeExchangeCurrency,
  currencyType: string
};
