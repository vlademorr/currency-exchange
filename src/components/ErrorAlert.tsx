import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Alert, Container, Row, Col} from 'react-bootstrap';

import {IError} from '../types';
import {ErrorContainer} from '../styled';

const ErrorAlert: React.FC<IError> = ({error}) => {
  const [show, setShow] = useState(true);

  if(!error || !show) return null;

  return (
    <Container>
      <Row>
        <Col/>
        <Col xs={8} sm={8} md={6} lg={3} xl={3}>
        <ErrorContainer>
          <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Error</Alert.Heading>
            <p>
              Somthing was wrong
            </p>
          </Alert>
        </ErrorContainer>
        </Col>
        <Col/>
      </Row>
    </Container>
  );
};

const mapStateToProps = ({error}: IError) => ({
  error
});

export default connect(mapStateToProps)(ErrorAlert);
