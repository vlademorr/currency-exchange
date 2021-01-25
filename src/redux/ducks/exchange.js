import {takeEvery, put, call} from "redux-saga/effects";

import {getFavorite} from "../../utils/favorites";
import {
  REQUEST, 
  SUCCESS, 
  ERROR, 
  FETCH, 
  DUFAULT, 
  EXCHANGE,
  FAVORITE
} from '../../constants';

const requestExchangeRates = () => (
  {type: REQUEST}
);

const requestExchangeRatesSuccess  = data => (
  { 
    type: SUCCESS,
    payload: data
  }
);

const requestExchangeRatesError  = () => (
  {type: ERROR}
);

const fetchExchangeRates = baseCurrency => (
  { 
    type: FETCH,
    payload: baseCurrency
  }
);

const changeDefaultCurrency = defaultCurrency => (
  {
    type: DUFAULT,
    payload: defaultCurrency
  }
);

const changeExchangeCurrency = exchangeCurrency => (
  {
    type: EXCHANGE,
    payload: exchangeCurrency
  }
);

const favoriteCurrency = currency => (
  {
    type: FAVORITE,
    payload: currency
  }
);

function* watchFetchExchangeRates() {
  yield takeEvery(FETCH, fetchExchangeRatesAsync);
};

function* fetchExchangeRatesAsync({payload}) {
  try {
    yield put(requestExchangeRates());
    const data = yield call(() => {
      return fetch('https://api.exchangeratesapi.io/latest?base=' + payload)
      .then(resp => resp.json())
      .then(({rates}) => {
        return Object.keys(rates).map(item => (
          {
            currency: item,
            rate: rates[item],
            favorite: getFavorite(item)
          }
        ));
      })
    });
    yield put(requestExchangeRatesSuccess(data));
  } catch (error) {
    yield put(requestExchangeRatesError());
  }
};

const initialState = {
  exchangeRates: [],
  baseCurrency: {currency: 'USD'},
  exchangeCurrency: {currency: 'RUB'},
  loading: true,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case SUCCESS:
      return {
        ...state,
        exchangeRates: action.payload,
        exchangeCurrency: action.payload[13],
        loading: false,
        error: false,
      };
    case ERROR:
      return {
        ...state,
        exchangeRates: [],
        loading: false,
        error: true,
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
    state.exchangeRates.forEach(item => {
      if (item.currency === action.payload) {
        item.favorite = !item.favorite
      }
    })
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
