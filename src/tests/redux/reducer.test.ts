import {
  REQUEST,
  SUCCESS,
  ERROR,
  DEFAULT,
  EXCHANGE,
  FAVORITE
} from '../../constants';

import {reducer} from '../../redux/ducks/exchange';

describe('currency exchange reducer', () => {
  const initialState = {
    exchangeRates: [],
    baseCurrency: {currency: 'USD', rate: 1},
    exchangeCurrency: {currency: 'RUB', rate: 1},
    loading: true,
    error: false
  };

  it('should handle REQUEST', () => {
    expect(reducer(initialState, {type: REQUEST})).toEqual({
      ...initialState,
      loading: true,
      error: false
    });
  });

  it('should handle SUCCESS', () => {
    const payload = [
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

    expect(reducer(initialState, {
      type: SUCCESS, payload: payload})).toEqual({
      ...initialState,
      exchangeRates: payload,
      exchangeCurrency: payload[3],
      loading: false,
      error: false
    });
  });

  it('should handle ERROR', () => {
    expect(reducer(initialState, {type: ERROR})).toEqual({
      ...initialState,
      exchangeRates: [],
      loading: false,
      error: true
    });
  });

  it('should handle DEFAULT', () => {
    const payload = {
      currency: 'USD',
      rate: 1,
      favorite: true
    };

    expect(reducer(initialState, {type: DEFAULT, payload: payload})).toEqual({
      ...initialState,
      baseCurrency: payload
    });
  });

  it('should handle EXCHANGE', () => {
    const payload = {
      currency: 'EUR',
      rate: 2,
      favorite: false
    };

    expect(reducer(initialState, {type: EXCHANGE, payload: payload})).toEqual({
      ...initialState,
      exchangeCurrency: payload
    });
  });

  it('should handle FAVORITE', () => {
    expect(reducer(initialState, {type: FAVORITE, payload: 'USD'})).toEqual({
      ...initialState,
      exchangeRates: [...initialState.exchangeRates]
    });
  });
});
