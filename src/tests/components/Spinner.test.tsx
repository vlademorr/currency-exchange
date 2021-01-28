import Enzyme, {shallow} from 'enzyme';
import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import {Spinner} from '../../components/index';

Enzyme.configure({adapter: new Adapter()});

it('expect to render Spinner component', () => {
  expect(shallow(<Spinner/>)).toMatchSnapshot();
});
