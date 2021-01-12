import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchExchangeRates} from "../../actions";
import {Row, Col} from "react-bootstrap";
import {Tabs} from "../Tabs";
import {Container, ColStyles} from "./style";
import {ExchangeRatesListItem} from "../ExchsngeRatesListItem";

const ExchangeRatesList = ({
  fetchExchangeRates, 
  exchangeRates,
  loading
}) => {
  useEffect(() => {
    fetchExchangeRates()
  }, [fetchExchangeRates])
  return(
    <Container>
      <Tabs/>
      <div>
        <Row as="ul">
          {
            (exchangeRates).map((currency) => {
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
      </div>
    </Container>
  )
}

const mapStateToProps = ({
  loading,
  exchangeRates
}) => {
  return {
    loading,
    exchangeRates
  };
};


const mapDispatchToProps = {
  fetchExchangeRates
};

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeRatesList);