import {getFavorite, setFavorite} from '../../utils/favorites'

describe('get & set favorite', function () {
  const localStorage = {
    getItem: () => '',
    setItem: (name: string, value: string): void => {}
  };

  Object.defineProperty(global, 'localStorage', { value: localStorage });

  it('get favorite when storage empty', () => {
    const mockValue = 'UUU';

    localStorage.getItem = () => '';

    expect(getFavorite(mockValue)).toBeFalsy();
  });

  it('get favorite when storage has empty array', () => {
    const mockValue = 'UUU';

    localStorage.getItem = () => '[]';

    expect(getFavorite(mockValue)).toBeFalsy();
  });

  it('get favorite when has favorite item', () => {
    const mockValue = 'USD';

    localStorage.getItem = () => `["${mockValue}"]`;

    expect(getFavorite(mockValue)).toBeTruthy();
  });

  it('get favorite error when JSON is invalid', () => {
    const mockValue = 'USD';

    localStorage.getItem = () => 'invalid JSON';

    expect(getFavorite(mockValue)).toBeFalsy();
  });

  it('set favorite', (done) => {
    const mockValue = 'UUU';

    localStorage.getItem = () => '[]';

    localStorage.setItem = (name: string, value: string) => {
      expect(name).toBe('favorites');
      expect(value).toBe(`["${mockValue}"]`);
      done();
    };

    setFavorite(mockValue);
  });

  it('remove favorite', (done) => {
    const mockValue = 'UUU';

    localStorage.getItem = () => `["${mockValue}"]`;

    localStorage.setItem = (name: string, value: string) => {
      expect(name).toBe('favorites');
      expect(value).toBe('[]');
      done();
    };

    setFavorite(mockValue);
  });

  it('set favorite when JSON is invalid', () => {
    const mockValue = 'UUU';

    localStorage.getItem = () => '[123]';

    expect(setFavorite(mockValue)).toBeFalsy();
  });
});
