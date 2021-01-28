import Enzyme, {shallow} from 'enzyme';
import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import ErrorAlert from '../../components/ErrorAlert/ErrorAlert';

Enzyme.configure({adapter: new Adapter()});

it('expect to render Error Alert component', () => {
  expect(shallow(<ErrorAlert error={true}/>)).toMatchSnapshot();
});

it('expect to render Error Alert component with error: false', () => {
  expect(shallow(<ErrorAlert error={false}/>)).toMatchSnapshot();
});
