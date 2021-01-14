import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {Tabs} from "../";
import {Spinner} from "../";
import {Container} from "../../styled/ExchsngeRatesList/style";
import {
  Form,
  Col,
  Button,
  Navbar
} 
from "react-bootstrap";
import {Formik} from 'formik';
import * as yup from "yup"; 
import {DropdownCurrencyList} from "../";

const ConverterInputGroup = ({
  exchangeCurrency,
  exchangeRates
}) => {
  const [currencyValue, setCurrencyValue] = useState({
    userValue: 1,
    exchangeValue: null,
    resultExchangeValue: null
  })
  useEffect(() => {
    if (!exchangeRates.length) return;
    exchangeRates.forEach((item) => {
      if (item.currency === exchangeCurrency.currency) {
          setCurrencyValue(
            {
              userValue: currencyValue.userValue, 
              exchangeValue: item.rate,
              resultExchangeValue: currencyValue.userValue * item.rate
            }
          )
        }
    });
  },[
    exchangeRates.length,
    exchangeCurrency.currency,
    exchangeRates
  ])

  if (!exchangeRates.length) {
    return (
      <Container>
        <Tabs/>
        <Spinner/>
      </Container>
    )
  }
  const onSubmit = ({defaultCurrencyConverter}) => {
    setCurrencyValue({
      userValue: defaultCurrencyConverter,
      exchangeValue: currencyValue.exchangeValue,
      resultExchangeValue: defaultCurrencyConverter * currencyValue.exchangeValue
    })
  }

  return (
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
      {({
        handleSubmit,
        handleChange,
        values,
        touched,
        errors
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>Default Currency</Form.Label>
              <DropdownCurrencyList currencyType="default"/>
              <Form.Control
                type="number"
                name="defaultCurrencyConverter"
                value={values.defaultCurrencyConverter}
                onChange={handleChange}
                isValid={touched.defaultCurrencyConverter && !errors.defaultCurrencyConverter}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Button type="submit">Change</Button>
            <DropdownCurrencyList currencyType="exchange"/>
            <Navbar bg="light">
              <Navbar.Brand>{currencyValue.resultExchangeValue}</Navbar.Brand>
            </Navbar>
          </Form.Row>
        </Form>
      )}
    </Formik>   
  )
};
const mapStateToProps = ({
  exchangeCurrency
}) => {
  return {
    exchangeCurrency
  };
};

export default connect(mapStateToProps)(ConverterInputGroup);