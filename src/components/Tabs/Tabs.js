import React, {useState} from "react";
import {Tabs as BootstrapTabs, Tab} from "react-bootstrap";

const Tabs = () => {
  const [key, setKey] = useState('home');
  return(
    <BootstrapTabs
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="home" title="Exchange Rates">
      </Tab>
      <Tab eventKey="profile" title="Currency Converter">
      </Tab>
    </BootstrapTabs>
  )
}

export default Tabs;