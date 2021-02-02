import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import {DropdownCentered} from '../../styled/index';
import {
  ICurrencyDropdown,
  IReducerCurrency,
  IChangeCurrency
} from '../../types/index';

const DropdownCurrency: React.FC<ICurrencyDropdown> = ({
  baseCurrency,
  currencyType,
  exchangeRates,
  exchangeCurrency,
  changeDefaultCurrency,
  changeExchangeCurrency
}) => {
  let currencyValue = '';
  let currencyAction: (currency: IReducerCurrency) => IChangeCurrency;

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      formControl: {
        margin: theme.spacing(1),
        minWidth: 80,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
    }),
  );

  const classes = useStyles();

  if (currencyType === 'default') {
    currencyAction = changeDefaultCurrency;
    currencyValue = baseCurrency.currency;
  } else if (currencyType === 'exchange') {
    currencyAction = changeExchangeCurrency;
    currencyValue = exchangeCurrency.currency;
  }

  return (
    <DropdownCentered>
      <FormControl className={classes.formControl}>
        <Select
          value={currencyValue}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {
            exchangeRates.map((item: IReducerCurrency) => (
              <MenuItem
                key={item.currency}
                onClick={() => currencyAction(item)}
                value={item.currency}
              >
                {item.currency}
              </MenuItem>
            ))
          }
        </Select>
        <FormHelperText>Select Currency</FormHelperText>
      </FormControl>
    </DropdownCentered>
  );
};

export default DropdownCurrency;
