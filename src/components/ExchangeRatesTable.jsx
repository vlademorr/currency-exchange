import React from 'react';
import {connect} from 'react-redux';
import {Container, Row, Col, Table} from 'react-bootstrap';

import {Spinner, CurrencyDropdown, ExchangeRatesRow} from './';

import {TableContainer, DropdownContainer} from '../styled';

const ExchangeRatesTable = ({
  loading,
  baseCurrency,
  exchangeRates
}) => {
  const favoriteFiltered = exchangeRates.sort((a, b) => (
    (a.favorite === b.favorite) ? 0 : a.favorite ? -1 : 1
  ));

  return (
    (loading)
    ?
    <Container>
      <Spinner/>
    </Container>
    :
    <Container>
        <Row>
          <Col></Col>
          <Col>
            <DropdownContainer>
              <h5>Default Currency: </h5>
              <CurrencyDropdown currencyType="default"/>
            </DropdownContainer>
            <TableContainer>
              <h6>
                <b>{baseCurrency.currency} </b>
                CURRENCY EXCHANGE RATES
              </h6>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Currency</th>
                    <th>Rate</th>
                    <th>Favorite</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    favoriteFiltered.map(currency => (
                      <ExchangeRatesRow
                        currency={currency}
                        key={currency.currency}
                      />
                    ))
                  }
                </tbody>
              </Table>
            </TableContainer>
          </Col>
          <Col></Col>
        </Row>
    </Container> 
  );
};

const mapStateToProps = (
  {
    loading,
    baseCurrency,
    exchangeRates,
  }
) => (
  {
    loading,
    baseCurrency,
    exchangeRates,
  }
);

export default connect(mapStateToProps)(ExchangeRatesTable);
