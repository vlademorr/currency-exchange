import React from "react";
import {useHistory, useLocation} from "react-router-dom";
import {Tabs as BootstrapTabs, Tab} from "react-bootstrap";

const Tabs = () => {
  const histoty = useHistory();
  const location = useLocation();
  const currentTab = location.pathname.slice(1);
  return (
    <BootstrapTabs
      activeKey={currentTab}
      onSelect={(k) =>{
        histoty.push(`/${k}`);
      }}
    >
      <Tab eventKey="ExchangeRates" title="ExchangeRates">
      </Tab>
      <Tab eventKey="CurrencyConverter" title="CurrencyConverter">    
      </Tab>
  </BootstrapTabs> 
  )
};

export default Tabs;