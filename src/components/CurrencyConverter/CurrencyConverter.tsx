import React, {useEffect, useState} from 'react';
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

import {Spinner, CurrencyDropdownContainer, Popover} from '../index';

import {ICurrencyConverter, IReducerCurrency} from '../../types';
import {CenteredCol, ExchangeRate} from '../../styled/index';

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
      }
    });
  }, [
    exchangeRates.length,
    exchangeCurrency.currency,
    exchangeRates,
    currencyValue.userValue
  ]);

  const onSubmit = ({defaultCurrencyConverter}: { defaultCurrencyConverter: number }) => {
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
      <Container>
        <Row>
          <Col/>
          <Col xs={3} sm={7} md={5} lg={4} xl={3}>
            <CenteredCol>
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
                          <Col>
                            <CenteredCol>
                              <Form.Group controlId="validationFormik01">
                                <h6>Default <br/> Currency</h6>
                                <CurrencyDropdownContainer currencyType="default"/>
                                <Form.Control
                                  type="number"
                                  name="defaultCurrencyConverter"
                                  value={values.defaultCurrencyConverter}
                                  onChange={handleChange}
                                  isValid={touched.defaultCurrencyConverter && !errors.defaultCurrencyConverter}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                              </Form.Group>
                            </CenteredCol>
                          </Col>
                          <Col>
                            <CenteredCol>
                              <Button type="submit" variant="success">Change</Button>
                              <Popover
                                title="Need help?"
                                description="Select the currency you need then enter
                                  the required amount on the left to
                                  convert and get it on the right."
                              />
                            </CenteredCol>
                          </Col>
                          <Col>
                            <CenteredCol>
                              <h6>Exchange <br/> Currency</h6>
                              <CurrencyDropdownContainer currencyType="exchange"/>
                              <ExchangeRate>
                                {Math.round(currencyValue.resultExchangeValue * 100 + Number.EPSILON) / 100}
                              </ExchangeRate>
                            </CenteredCol>
                          </Col>
                        </Form.Row>
                      </Form>
                    </Row>
                  )
                }
              </Formik>
            </CenteredCol>
          </Col>
          <Col/>
        </Row>
      </Container>
    )
  )
};

export default CurrencyConverter;
