import React from 'react';
import {connect} from 'react-redux';

import App from './App';

import {fetchExchangeRates} from './redux/ducks/exchange';
import {IApp, IAppState} from './types';
import 'bootstrap/dist/css/bootstrap.min.css';

const AppContainer: React.FC<IApp> = ({fetchExchangeRates, baseCurrency}) => (
  <App fetchExchangeRates={fetchExchangeRates} baseCurrency={baseCurrency}/>
);

const mapStateToProps = ({baseCurrency}: IAppState) => ({
  baseCurrency
});

const mapDispatchToProps = {
  fetchExchangeRates
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
