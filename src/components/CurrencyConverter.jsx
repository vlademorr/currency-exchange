import React from 'react';
import {connect} from 'react-redux';
import {Container} from 'react-bootstrap';

import {ConverterInputs} from './';

const CurrencyConverter = ({exchangeRates}) => (
  <Container>
    <ConverterInputs
      exchangeRates={exchangeRates}
    />
  </Container>
);

const mapStateToProps = ({exchangeRates}) => (
  {exchangeRates}
);

export default connect(mapStateToProps)(CurrencyConverter);
