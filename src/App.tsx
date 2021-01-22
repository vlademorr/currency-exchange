import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {ExchangeRatesTable, CurrencyConverter, Navbar, ErrorAlert} from './components';

import {fetchExchangeRates} from './redux/ducks/exchange';
import {IApp, IReducer, IReducerCurrency} from './types';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC<IApp> = ({fetchExchangeRates, baseCurrency}) => {
  useEffect(() => {
    fetchExchangeRates(baseCurrency.currency);
  }, [fetchExchangeRates, baseCurrency]);
  
  return (
    <Router>
      <ErrorAlert/>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={ExchangeRatesTable}/>
        <Route path="/ExchangeRates" exact component={ExchangeRatesTable}/>
        <Route path="/CurrencyConverter" exact component={CurrencyConverter}/>
      </Switch>
    </Router>
  );
};

const mapStateToProps = ({baseCurrency}: IReducer): {baseCurrency: IReducerCurrency} => ({
  baseCurrency
});

const mapDispatchToProps = {
  fetchExchangeRates
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
