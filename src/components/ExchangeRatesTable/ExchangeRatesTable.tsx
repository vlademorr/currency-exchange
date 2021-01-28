import React from 'react';
import {Container, Row, Col, Table} from 'react-bootstrap';

import {Spinner, CurrencyDropdownContainer, ExchangeRatesRowContainer} from '../index';

import {ITableProps, IReducerCurrency} from '../../types/index';
import {TableContainer, DropdownContainer} from '../../styled/index';


const ExchangeRatesTable: React.FC<ITableProps> = ({
  loading,
  baseCurrency,
  exchangeRates
}) => {
  const favoriteFiltered = exchangeRates.sort((a: IReducerCurrency, b: IReducerCurrency) => (
    (a.favorite === b.favorite) ? 0 : a.favorite ? -1 : 1
  ));

  return (
    loading ? (
      <Container>
        <Spinner/>
      </Container>
    ) : (
      <Container>
        <Row>
          <Col/>
          <Col>
            <DropdownContainer>
              <h5>Default Currency: </h5>
              <CurrencyDropdownContainer currencyType="default"/>
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
                    favoriteFiltered.map((currency: IReducerCurrency) => (
                      <ExchangeRatesRowContainer
                        currency={currency}
                        key={currency.currency}
                      />
                    ))
                  }
                </tbody>
              </Table>
            </TableContainer>
          </Col>
          <Col/>
        </Row>
      </Container> 
    )
  );
};

export default ExchangeRatesTable;
