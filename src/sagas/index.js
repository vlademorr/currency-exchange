import {takeEvery, put, call} from "redux-saga/effects";
import {
  requestExchangeRates,
  requestExchangeRatesSuccess,
  requestExchangeRatesError
} from "../actions"
import {FETCH} from "../components/constants"

function* watchFetchExchangeRates() {
  yield takeEvery(FETCH, fetchExchangeRatesAsync);
}

function* fetchExchangeRatesAsync() {
  try {
    yield put(requestExchangeRates());
    const data = yield call(() => {
      return fetch("https://api.exchangeratesapi.io/latest")
      .then(resp => resp.json())
      .then(({rates}) => {
        return Object.keys(rates).map((item) =>{
          return {
            currency: item,
            value: rates[item]
          }
        });
      })
    });
    yield put(requestExchangeRatesSuccess(data));
  } catch (error) {
    yield put(requestExchangeRatesError());
  }
}

export {
  watchFetchExchangeRates
}