import React from "react";
import {connect} from "react-redux";
import {Row, Col} from "react-bootstrap";
import {Tabs} from "./";
import {Spinner} from "./";
import {DropdownCurrencyList} from "./";
import {Container, ColStyles} from "../styled/ExchsngeRatesList/style";
import {ExchangeRatesListItem} from "./";

const ExchangeRatesList = ({
  exchangeRates,
  loading
}) => {
  const filteredByFavoriteCurrency = localStorage
  .getItem("favorites") !== "[]" ? 
  [...exchangeRates].sort((a,b) =>{
    return (a.favorite === b.favorite) ? 0 : a.favorite ? -1 : 1
  }) : exchangeRates;

  if (loading) {
    return (
      <Container>
        <Tabs/>
        <Spinner/>
      </Container>
    ) 
  }
  return (
    <Container>
      <Tabs/>
      <DropdownCurrencyList currencyType="default"/>
        <Row as="ul">
          {
            (filteredByFavoriteCurrency).map((currency) => {
              return (
                <Col as="li" xl={4} lg={6} md={6} sm={12} xs={12} key={currency.currency} style={ColStyles}>
                  <ExchangeRatesListItem
                    currency={currency}
                  />
                </Col>
              )
            })
          }
        </Row>
    </Container> 
  );
};

const mapStateToProps = ({
  loading,
  baseCurrency,
  exchangeRates
}) => {
  return {
    loading,
    baseCurrency,
    exchangeRates
  };
};

export default connect(mapStateToProps)(ExchangeRatesList);