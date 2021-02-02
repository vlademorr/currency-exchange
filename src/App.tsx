import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {
  ExchangeRatesTableContainer,
  CurrencyConverterContainer,
  CurrencyChartContainer,
  ErrorAlertContainer,
  Navbar
} from './components';

import {IApp} from './types/components/App';

const App: React.FC<IApp> = ({fetchExchangeRates, baseCurrency}) => {
  useEffect(() => {
    fetchExchangeRates(baseCurrency.currency);
  }, [fetchExchangeRates, baseCurrency]);

  return (
    <Router>
      <ErrorAlertContainer/>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={ExchangeRatesTableContainer}/>
        <Route path="/ExchangeRates" exact component={ExchangeRatesTableContainer}/>
        <Route path="/CurrencyConverter" exact component={CurrencyConverterContainer}/>
        <Route path="/CurrencyChart" exact component={CurrencyChartContainer}/>
      </Switch>
    </Router>
  )
};

export default App;
