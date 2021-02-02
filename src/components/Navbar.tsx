import React from 'react';
import {useHistory} from 'react-router-dom';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Navbar: React.FC = () => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
    }),
  );

  const classes = useStyles();

  const history = useHistory();

  const linkTo = (url: string) => {
    history.push(`/${url}`);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Currency Exchange
          </Typography>
          <Button
            color="inherit"
            onClick={() => linkTo("ExchangeRates")}
          >
            Exchange Rates
          </Button>
          <Button
            color="inherit"
            onClick={() => linkTo("CurrencyConverter")}
          >
            Currency Converter
          </Button>
          <Button
            color="inherit"
            onClick={() => linkTo("CurrencyChart")}
          >
            Currency Chart
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
