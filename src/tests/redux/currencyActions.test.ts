import {
  requestExchangeRates,
  exchangeRatesSuccess,
  exchangeRatesError,
  fetchExchangeRates,
  changeDefaultCurrency,
  changeExchangeCurrency,
  favoriteCurrency
} from '../../redux/ducks/exchange';
import {
  REQUEST,
  SUCCESS,
  ERROR,
  FETCH,
  DEFAULT,
  EXCHANGE,
  FAVORITE
} from '../../constants';

describe('currency exchange actions', () => {
  it('exchange rates action', () => {
    expect(requestExchangeRates()).toStrictEqual({type: REQUEST});
  });

  it('exchange rates success action', () => {
    const data = [
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

    expect(exchangeRatesSuccess(data)).toStrictEqual({type: SUCCESS, payload: data});
  });

  it('exchange rates error action', () => {
    expect(exchangeRatesError()).toStrictEqual({type: ERROR});
  });

  it('fetch exchange rates action', () => {
    const baseCurrency = 'USD';

    expect(fetchExchangeRates(baseCurrency)).toStrictEqual({type: FETCH, payload: baseCurrency});
  });

  it('change exchange currency action', () => {
    const defaultCurrency = {
      currency: 'USD',
      rate: 1,
      favorite: true
    };

    expect(changeDefaultCurrency(defaultCurrency)).toStrictEqual({type: DEFAULT, payload: defaultCurrency});
  });

  it('change default currency action', () => {
    const exchangeCurrency = {
      currency: 'EUR',
      rate: 2,
      favorite: false
    };

    expect(changeExchangeCurrency(exchangeCurrency)).toStrictEqual({type: EXCHANGE, payload: exchangeCurrency});
  });

  it('favorite currency action', () => {
    const currency = 'RUB';
    expect(favoriteCurrency(currency)).toStrictEqual({type: FAVORITE, payload: currency});
  });
});
