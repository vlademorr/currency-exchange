import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {ExchangeRatesList} from "./components/ExchsngeRatesList";
import {CurrencyConverter} from "./components/CurrencyConverter"
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={ExchangeRatesList}/>
          <Route path="/ExchangeRates" exact component={ExchangeRatesList}/>
          <Route path="/CurrencyConverter" exact component={CurrencyConverter}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;