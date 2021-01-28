import Enzyme, {shallow} from 'enzyme';
import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import {Popover} from '../../components/index';

Enzyme.configure({adapter: new Adapter()});

it('expect to render Popover component', () => {
  expect(shallow(<Popover title="title" description="description"/>)).toMatchSnapshot();
});
