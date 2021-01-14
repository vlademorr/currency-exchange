import React, {useEffect} from "react";
import {connect} from "react-redux";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {ExchangeRatesList} from "./components";
import {CurrencyConverter} from "./components";
import {fetchExchangeRates} from "./redux/ducks/actions";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = ({fetchExchangeRates, baseCurrency}) => {
  useEffect(() => {
    fetchExchangeRates(baseCurrency.currency)
  }, [fetchExchangeRates, baseCurrency])
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ExchangeRatesList}/>
        <Route path="/ExchangeRates" exact component={ExchangeRatesList}/>
        <Route path="/CurrencyConverter" exact component={CurrencyConverter}/>
      </Switch>
    </Router>
  );
};
const mapStateToProps = ({
  baseCurrency
}) => {
  return {
    baseCurrency
  };
};

const mapDispatchToProps = {
  fetchExchangeRates
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

