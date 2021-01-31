import React from 'react';
import {render, screen} from '@testing-library/react';

import ExchangeRatesRow from '../../../components/ExchangeRatesRow/ExchangeRatesRow';

describe('ExchangeRatesRow', () => {
  const props = {
    favoriteCurrency: jest.fn(),
    currency: {
      currency: 'EUR',
      rate: 2,
      favorite: false
    }
  };

  it('is the img rendered', () => {
    render(<ExchangeRatesRow {...props}/>);

    expect(screen.queryByRole('img')).toBeInTheDocument();
    expect(screen.getByAltText('favorite')).toBeInTheDocument();
  });
});
