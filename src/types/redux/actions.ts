import {IReducerCurrency} from '../';
import {
  REQUEST,
  ERROR,
  SUCCESS,
  FETCH,
  DEFAULT,
  EXCHANGE,
  FAVORITE
} from '../../constants';

interface ICurrencyAction{
  payload: IReducerCurrency
}

export interface IRequestExchangeRates{
  type: typeof REQUEST
}

export interface IRequestExchangeRatesSuccess{
  type: typeof SUCCESS,
  payload: IReducerCurrency[]
}

export interface IRequestExchangeRatesError {
  type: typeof ERROR
}

export interface IChangeDefaultCurrency extends ICurrencyAction {
  type: typeof DEFAULT
}

export interface IChangeExchangeCurrency extends ICurrencyAction {
  type: typeof EXCHANGE
}

export interface IFavoriteCurrency {
  type: typeof FAVORITE,
  payload: string
}

export interface IFetchExchangeRates {
  type: typeof FETCH,
  payload: string
}

export type IChangeCurrency = IChangeDefaultCurrency | IChangeExchangeCurrency;

export type ActionTypes = 
IRequestExchangeRates | IRequestExchangeRatesSuccess | IRequestExchangeRatesError |
IChangeDefaultCurrency | IChangeExchangeCurrency | IFavoriteCurrency | IFetchExchangeRates;
