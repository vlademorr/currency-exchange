import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import {SpinnerCentered} from '../styled';

const Spinner: React.FC = () => <SpinnerCentered><CircularProgress /></SpinnerCentered>;

export default Spinner;
