import React from 'react';
import {HorizontalBar} from '@reactchartjs/react-chart.js'

import {CurrencyDropdownContainer} from '../index';

import {DropdownContainer} from '../../styled/index';
import {ICurrencyChart} from '../../types/index';

const CurrencyChart: React.FC<ICurrencyChart> = ({exchangeRates, baseCurrency}) => {
  const currency: string[] = [];
  const currencyRate: number[] = [];

  exchangeRates.forEach((item) =>{
    if(item.rate < 100){
      currency.push(item.currency);
      currencyRate.push(item.rate);
    }
  });

  const data = {
    labels: currency,
    datasets: [{
      label: `${baseCurrency.currency} rate to other currencies. (Currencies with a rate of no more than 100)`,
      data: currencyRate,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <DropdownContainer>
        <h5>Default Currency: </h5>
        <CurrencyDropdownContainer currencyType="default" />
      </DropdownContainer>
      <HorizontalBar type="bar" data={data} options={options}/>
    </>
  )
};

export default CurrencyChart;
