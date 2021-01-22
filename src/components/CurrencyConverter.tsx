import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {Formik} from 'formik';
import * as yup from 'yup'; 
import {
  Container,
  Form,
  Row,
  Col,
  Button
} 
from 'react-bootstrap';

import {Spinner, CurrencyDropdown, Popover} from '.';

import {CenteredCol, ExchangeRate} from '../styled';
import {ICurrencyConverter, IReducerCurrency, IReducer} from '../types';

const CurrencyConverter: React.FC<ICurrencyConverter> = ({
  exchangeRates,
  exchangeCurrency
}) => {
  const [currencyValue, setCurrencyValue] = useState({
    userValue: 1,
    exchangeValue: 0,
    resultExchangeValue: 0
  });

  useEffect(() => {
    if (!exchangeRates.length) return;
    exchangeRates.forEach((item: IReducerCurrency) => {
      if (item.currency === exchangeCurrency.currency) {
          setCurrencyValue({
            userValue: currencyValue.userValue, 
            exchangeValue: item.rate,
            resultExchangeValue: currencyValue.userValue * item.rate
          });
        };
    });
  },[
    exchangeRates.length,
    exchangeCurrency.currency,
    exchangeRates,
    currencyValue.userValue
  ]);

  const onSubmit = ({defaultCurrencyConverter}: {defaultCurrencyConverter: number}) => {
    setCurrencyValue({
      userValue: defaultCurrencyConverter,
      exchangeValue: currencyValue.exchangeValue,
      resultExchangeValue: defaultCurrencyConverter * currencyValue.exchangeValue
    });
  };

  return (
    !exchangeRates.length ? (
      <Container>
        <Spinner/>
      </Container>
    ) : (
      <Row>
        <Col/>
        <Col xs={2} sm={7} md={5} lg={4} xl={4} style={CenteredCol}>
          <h4>Currency Converter</h4>
          <Formik
            validationSchema={
              yup.object({    
                defaultCurrencyConverter: yup.number().required()
              })
            }
            onSubmit={onSubmit}
            initialValues={{
              defaultCurrencyConverter: currencyValue.userValue
            }}
          >
            {
              ({
                handleSubmit,
                handleChange,
                values,
                touched,
                errors
              }) => (
                <Row>
                  <Form noValidate onSubmit={handleSubmit}>
                    <Form.Row>
                      <Col style={CenteredCol}>
                        <Form.Group controlId="validationFormik01">
                          <h6>Default Currency</h6>
                          <CurrencyDropdown currencyType="default"/>
                          <Form.Control
                            type="number"
                            name="defaultCurrencyConverter"
                            value={values.defaultCurrencyConverter}
                            onChange={handleChange}
                            isValid={touched.defaultCurrencyConverter && !errors.defaultCurrencyConverter}
                          />
                          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col style={CenteredCol}>
                        <Button type="submit" variant="success">Change</Button>
                        <Popover
                          title="Need help?"
                          description="Select the currency you need then enter
                            the required amount on the left to 
                            convert and get it on the right."
                        />
                      </Col>
                      <Col style={CenteredCol}>
                        <h6>Exchange Currency</h6>
                        <CurrencyDropdown currencyType="exchange"/>
                        <ExchangeRate>
                          {Math.round(currencyValue.resultExchangeValue * 100 + Number.EPSILON) / 100}
                        </ExchangeRate>
                      </Col>
                    </Form.Row>
                  </Form>
                </Row>
              )
            }
          </Formik> 
        </Col>  
        <Col/>
      </Row>
    )
  );
};

const mapStateToProps = ({exchangeRates, exchangeCurrency}: IReducer): ICurrencyConverter => ({
  exchangeRates,
  exchangeCurrency
});

export default connect(mapStateToProps)(CurrencyConverter);
