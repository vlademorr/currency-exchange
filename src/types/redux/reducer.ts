export interface IReducerCurrency {
  currency: string,
  rate: number,
  favorite?: boolean
};

export interface IReducer {
  exchangeRates: IReducerCurrency[],
  baseCurrency: IReducerCurrency,
  exchangeCurrency: IReducerCurrency,
  loading: boolean,
  error: boolean
};
