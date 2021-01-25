import * as Eff from 'redux-saga/effects';

import {getFavorite} from '../../utils/favorites';
import {
  IReducer,
  IReducerCurrency,
  IRequestExchangeRates,
  IRequestExchangeRatesSuccess,
  IRequestExchangeRatesError,
  IFetchExchangeRates,
  IChangeDefaultCurrency,
  IChangeExchangeCurrency,
  IFavoriteCurrency,
  ActionTypes
} from '../../types';
import {
  REQUEST, 
  SUCCESS, 
  ERROR, 
  FETCH, 
  DUFAULT, 
  EXCHANGE,
  FAVORITE
} from '../../constants';

const requestExchangeRates = (): IRequestExchangeRates => ({
  type: REQUEST
});

const requestExchangeRatesSuccess = (data: IReducerCurrency[]): IRequestExchangeRatesSuccess => ({
  type: SUCCESS,
  payload: data
});

const requestExchangeRatesError  = (): IRequestExchangeRatesError => ({
  type: ERROR
});

const fetchExchangeRates = (baseCurrency: string): IFetchExchangeRates => ({ 
  type: FETCH,
  payload: baseCurrency
});

const changeDefaultCurrency = (defaultCurrency: IReducerCurrency): IChangeDefaultCurrency => ({
  type: DUFAULT,
  payload: defaultCurrency
});

const changeExchangeCurrency = (exchangeCurrency: IReducerCurrency): IChangeExchangeCurrency => ({
  type: EXCHANGE,
  payload: exchangeCurrency
});

const favoriteCurrency = (currency: string): IFavoriteCurrency => ({
  type: FAVORITE,
  payload: currency
});

const takeEvery: any = Eff.takeEvery;

function* watchFetchExchangeRates() {
  yield takeEvery(FETCH, fetchExchangeRatesAsync);
}

function* fetchExchangeRatesAsync({payload}: {payload: string}) {
  try {
    yield Eff.put(requestExchangeRates());
    const data = yield Eff.call(() => {
      return fetch('https://api.exchangeratesapi.io/latest?base=' + payload)
      .then(resp => resp.json())
      .then(({rates}) => {
        return Object.keys(rates).map(item => ({
          currency: item,
          rate: rates[item],
          favorite: getFavorite(item)
        }));
      });
    });
    yield Eff.put(requestExchangeRatesSuccess(data));
  } catch (error) {
    console.log(error);
    yield Eff.put(requestExchangeRatesError());
  }
}

const initialState: IReducer = {
  exchangeRates: [],
  baseCurrency: {currency: 'USD', rate: 1},
  exchangeCurrency: {currency: 'RUB', rate: 1},
  loading: true,
  error: false
};

const reducer = (state = initialState, action: ActionTypes): IReducer => {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        loading: true,
        error: false
      };
    case SUCCESS:
      return {
        ...state,
        exchangeRates: action.payload,
        exchangeCurrency: action.payload[13],
        loading: false,
        error: false
      };
    case ERROR:
      return {
        ...state,
        exchangeRates: [],
        loading: false,
        error: true
      };
    case DUFAULT:
    return {
      ...state,
      baseCurrency: action.payload
    };
    case EXCHANGE:
    return {
      ...state,
      exchangeCurrency: action.payload
    };
    case FAVORITE:
    state.exchangeRates.forEach((item: IReducerCurrency) => {
      if (item.currency === action.payload) {
        item.favorite = !item.favorite
      }
    });
    return {
      ...state,
      exchangeRates: [...state.exchangeRates]
    };
    default:
      return state;
  }
};

export {
  reducer,
  requestExchangeRates,
  requestExchangeRatesSuccess,
  requestExchangeRatesError,
  fetchExchangeRates,
  changeDefaultCurrency,
  changeExchangeCurrency,
  favoriteCurrency,
  watchFetchExchangeRates
};
