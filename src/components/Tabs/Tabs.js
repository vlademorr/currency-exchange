import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Tabs as BootstrapTabs, Tab} from "react-bootstrap";

const Tabs = () => {
  const [key, setKey] = useState("ExchangeRates");
  return(
    <BootstrapTabs
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="ExchangeRates" title={
        <Link to="/ExchangeRates">
          Exchange Rates
        </Link> 
      }>
      </Tab>
      <Tab eventKey="CurrencyConverter" title={
        <Link to="/CurrencyConverter">
          Currency Converter
        </Link> 
      }>    
      </Tab>
  </BootstrapTabs> 
  )
}

export default Tabs;