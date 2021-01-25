import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Alert, Container, Row, Col} from 'react-bootstrap';

import {ErrorContainer} from '../styled';

const ErrorAlert = ({error}) => {
  const [show, setShow] = useState(true);
  return (
    (!error || !show)
    ?
    null
    :
    <Container>
      <Row>
        <Col></Col>
        <Col xs={8} sm={8} md={6} lg={3} xl={3}>
        <ErrorContainer>
          <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Error</Alert.Heading>
            <p>
              Somthing was wrong
              <br/>
              Error: {error}
            </p>
          </Alert>
        </ErrorContainer>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = ({error}) => (
  {error}
);

export default connect(mapStateToProps)(ErrorAlert);
