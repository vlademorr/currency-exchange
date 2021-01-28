import React from 'react';
import {connect} from 'react-redux';

import ErrorAlert from './ErrorAlert';

import {IError} from '../../types/index';

const ErrorAlertContainer: React.FC<IError> = ({error}) => (
  <ErrorAlert error={error}/>
);

const mapStateToProps = ({error}: IError) => ({
  error
});

export default connect(mapStateToProps)(ErrorAlertContainer);
