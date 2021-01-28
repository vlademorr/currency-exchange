import * as Eff from 'redux-saga/effects';
import {runSaga} from 'redux-saga';
import '@babel/polyfill';

import {
  watchFetchExchangeRates,
  fetchExchangeRatesAsync,
  requestExchangeRatesSuccess,
  requestExchangeRatesError,
  requestExchangeRates as requestExchangeRatesAction
} from '../../redux/ducks/exchange';
import * as exchangeRatesService from '../../services/exchangeRatesService';
import {FETCH} from '../../constants';

const takeEvery: any = Eff.takeEvery;

const genObject = watchFetchExchangeRates();

describe('fetchExchangeRatesAsync', () => {
  it('should wait for every actions and call watchFetchExchangeRates', () => {
    expect(genObject.next().value)
      .toEqual(takeEvery(FETCH, fetchExchangeRatesAsync));
  });

  it('should be done on next iteration', () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe('watchFetchExchangeRates', () => {
  it('should call api and dispatch success action', async () => {
    const dummyExchangeRates = [
      {
        currency: 'USD',
        rate: 1,
        favorite: true
      },
      {
        currency: 'EUR',
        rate: 2,
        favorite: false
      },
      {
        currency: 'RUB',
        rate: 3,
        favorite: true
      }
    ];

    const requestExchangeRates = jest.spyOn(
      exchangeRatesService,
      'getExchangeRates'
    ).mockImplementation(() => Promise.resolve(dummyExchangeRates));

    const dispatched: any[] = [];

    await runSaga({
      dispatch: (action) => dispatched.push(action),
    }, () => fetchExchangeRatesAsync({payload: 'USD'}));

    expect(requestExchangeRates).toHaveBeenCalledTimes(1);

    expect(dispatched).toEqual([
      requestExchangeRatesAction(),
      requestExchangeRatesSuccess(dummyExchangeRates),
    ]);

    requestExchangeRates.mockClear();
  });

  it('should call api and dispatch error action', async () => {
    const requestExchangeRates = jest.spyOn(
      exchangeRatesService,
      'getExchangeRates'
    ).mockImplementation(() => Promise.reject());

    const dispatched: any[] = [];

    await runSaga({
      dispatch: (action) => dispatched.push(action),
    }, () => fetchExchangeRatesAsync({payload: 'USD'}));

    expect(requestExchangeRates).toHaveBeenCalledTimes(1);

    expect(dispatched).toEqual([
      requestExchangeRatesAction(),
      requestExchangeRatesError()
    ]);

    requestExchangeRates.mockClear();
  });
});
