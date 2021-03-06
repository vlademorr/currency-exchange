import React from 'react';
import {Spinner as SpinnerBootstrap} from 'react-bootstrap';

import {SpinnerCentered} from '../styled';

const Spinner: React.FC = () => (
  <SpinnerCentered><SpinnerBootstrap animation="border" variant="primary"/></SpinnerCentered>
);

export default Spinner;
