import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {Spinner, CurrencyDropdownContainer, ExchangeRatesRowContainer} from '../index';

import {ITableProps, IReducerCurrency} from '../../types/index';
import {TableContainer as TableContainerStyle, DropdownContainer} from '../../styled/index';

const ExchangeRatesTable: React.FC<ITableProps> = ({
  loading,
  baseCurrency,
  exchangeRates
}) => {
  const useStyles = makeStyles({
    table: {
      minWidth: 200,
    },
  });

  const classes = useStyles();

  const favoriteFiltered = exchangeRates.sort((a: IReducerCurrency, b: IReducerCurrency) => (
    (a.favorite === b.favorite) ? 0 : a.favorite ? -1 : 1
  ));

  return (
    loading ? (
      <Spinner/>
    ) : (
      <Grid container spacing={3}>
        <Grid item xs />
        <Grid item xs={10} sm={7} md={5} lg={4} xl={3}>
          <DropdownContainer>
            <h5>Default Currency: </h5>
            <CurrencyDropdownContainer currencyType="default"/>
          </DropdownContainer>
          <TableContainerStyle>
            <h6>
              <b>{baseCurrency.currency} </b>
              CURRENCY EXCHANGE RATES
            </h6>
            <TableContainer component={Paper}>
              <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell>Currency</TableCell>
                    <TableCell>Rate</TableCell>
                    <TableCell align="right">Favorite</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    favoriteFiltered.map((currency: IReducerCurrency) => (
                      <ExchangeRatesRowContainer
                        currency={currency}
                        key={currency.currency}
                      />
                    ))
                  }
                </TableBody>
              </Table>
            </TableContainer>
          </TableContainerStyle>
        </Grid>
        <Grid item xs />
      </Grid>
    )
  );
};

export default ExchangeRatesTable;
