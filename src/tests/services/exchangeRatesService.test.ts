import 'isomorphic-fetch';
import {getExchangeRates} from "../../services/exchangeRatesService";

describe('asyncFetch', () => {
  const localStorage = {
    getItem: () => '',
    setItem: (name: string, value: string): void => {}
  };

  Object.defineProperty(global, 'localStorage', { value: localStorage });

  it('can fetch', async () => {
    const mockValue = 'USD';

    localStorage.getItem = () => `["${mockValue}"]`;

    const res = await getExchangeRates('USD');

    expect(res).toBeInstanceOf(Array);
  });
});
