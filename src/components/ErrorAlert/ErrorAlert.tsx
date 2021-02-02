import React, {useState} from 'react';
import Alert from '@material-ui/lab/Alert';

import {IError} from '../../types/index';
import {ErrorContainer} from '../../styled/index';

const ErrorAlert: React.FC<IError> = ({error}) => {
  const [show, setShow] = useState(true);

  if(!error || !show) return null;

  return (
    <ErrorContainer>
      <Alert variant="filled" severity="error" onClick={() => setShow(false)}>
        Something was wrong
      </Alert>
    </ErrorContainer>
  )
};

export default ErrorAlert;
