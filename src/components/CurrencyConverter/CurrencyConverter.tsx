import React, {useEffect, useState} from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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
      <Spinner/>
    ) : (
      <Grid container>
        <Grid item xs/>
        <Grid item xs={10} sm={6} md={5} lg={4} xl={3}>
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
                   values
                 }) => (
                  <form noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={4}>
                        <CenteredCol>
                            <h6>Default <br/> Currency</h6>
                            <CurrencyDropdownContainer currencyType="default"/>
                            <TextField
                              type="number"
                              name="defaultCurrencyConverter"
                              value={values.defaultCurrencyConverter}
                              onChange={handleChange}
                            />
                        </CenteredCol>
                      </Grid>
                      <Grid item xs={4}>
                        <CenteredCol>
                          <Button color="primary" variant="contained" fullWidth type="submit">
                            Change
                          </Button>
                          <Popover
                            title="Need help?"
                            description="Select the currency you need then enter
                              the required amount on the left to
                              convert and get it on the right."
                          />
                        </CenteredCol>
                      </Grid>
                      <Grid item xs={4}>
                        <CenteredCol>
                          <h6>Exchange <br/> Currency</h6>
                          <CurrencyDropdownContainer currencyType="exchange"/>
                          <ExchangeRate>
                            {Math.round(currencyValue.resultExchangeValue * 100 + Number.EPSILON) / 100}
                          </ExchangeRate>
                        </CenteredCol>
                      </Grid>
                    </Grid>
                  </form>
                )
              }
            </Formik>
          </CenteredCol>
        </Grid>
        <Grid item xs/>
      </Grid>
    )
  )
};

export default CurrencyConverter;
