import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import CurrencyChart from '../components/CurrencyChart/CurrencyChart';


export default {
  title: 'Currency Chart',
  component: CurrencyChart,
} as Meta;

const initialState = {
  loading: false,
  baseCurrency: {
    currency: 'EUR',
    rate: 2,
    favorite: false
  },
  exchangeRates: [
    {
      currency: 'EUR',
      rate: 1,
      favorite: false
    },
    {
      currency: 'USD',
      rate: 2,
      favorite: true
    },
    {
      currency: 'RUB',
      rate: 3,
      favorite: false
    }
  ]
};

const mockStore = configureStore();

const store = mockStore(initialState);

const props = initialState;

const Template: Story = () =>
  <Provider store={store}><CurrencyChart {...props} /></Provider>;

export const CurrencyChartStory = Template.bind({});

CurrencyChartStory.args = props;
