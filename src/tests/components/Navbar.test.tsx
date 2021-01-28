import Enzyme, {shallow} from 'enzyme';
import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import {Navbar} from '../../components/index';

Enzyme.configure({adapter: new Adapter()});

it('expect to render Navbar component', () => {
  expect(shallow(<Navbar/>)).toMatchSnapshot();
});
