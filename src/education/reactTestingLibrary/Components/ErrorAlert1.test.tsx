import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';

import ErrorAlert from '../../../components/ErrorAlert/ErrorAlert';

describe('Error Alert', () => {
  it('is the Error Alert rendered', () => {
    render(<ErrorAlert error={true}/>);

    expect(screen.getByText('Something was wrong')).toBeInTheDocument();
  });

  it('click', () => {
    const {getByRole} = render(<ErrorAlert error={true}/>);
    const Alert = getByRole('alert');
    const AlertBtn = getByRole('button');

    expect(Alert).toBeInTheDocument();

    fireEvent.click(AlertBtn);
    expect(Alert).not.toBeInTheDocument();
  })
});
