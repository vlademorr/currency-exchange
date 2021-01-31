import React from 'react';
import {render, screen} from '@testing-library/react';

import {Popover} from '../../../components/index';

describe('Popover', () => {
  const props = {
    title: 'Need help?',
    description: 'some test text'
  };

  it('is the text rendered', () => {
    render(<Popover {...props}/>);

    expect(screen.getByText(props.title)).toBeInTheDocument();
  });
});
