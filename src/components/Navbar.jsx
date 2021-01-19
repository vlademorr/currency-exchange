import React from 'react';
import {useHistory} from 'react-router-dom';
import {Navbar as NavbarBootstrap, Nav} from 'react-bootstrap';

const Navbar = () => {
  const history = useHistory();
  const linkTo = url => {
    history.push(`/${url}`);
  };

  return (
    <NavbarBootstrap bg="primary" variant="dark">
      <NavbarBootstrap.Brand>Currency Exchange</NavbarBootstrap.Brand>
      <Nav className="mr-auto">
        <Nav.Link onClick={() => linkTo("ExchangeRates")}>Exchange Rates</Nav.Link>
        <Nav.Link onClick={() => linkTo("CurrencyConverter")}>Currency Converter</Nav.Link>
      </Nav>
    </NavbarBootstrap>
  );
};

export default Navbar;
