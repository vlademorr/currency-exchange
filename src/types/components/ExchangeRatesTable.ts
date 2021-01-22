import {IReducerCurrency} from '..';

export interface ITableProps {
  loading: boolean,
  baseCurrency: IReducerCurrency,
  exchangeRates: IReducerCurrency[]
};
