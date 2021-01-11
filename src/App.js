import React from "react";
import {ExchangeRatesList} from "./components/ExchsngeRatesList";
import {CurrencyConverter} from "./components/CurrencyConverter"
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <ExchangeRatesList />
      <CurrencyConverter/>
    </div>
  );
}

export default App;