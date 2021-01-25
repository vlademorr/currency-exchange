import React from 'react';
import {OverlayTrigger, Button, Popover as PopoverBootstrap} from 'react-bootstrap';

import {PopoverButton} from '../styled';
import {IPopover} from '../types';

const Popover: React.FC<IPopover> = ({title, description}) => (
  <OverlayTrigger
    trigger="click"
    key="bottom"
    placement="bottom"
    overlay={
      <PopoverBootstrap id="popover-positioned-bottom">
        <PopoverBootstrap.Content>
          {description}
        </PopoverBootstrap.Content>
      </PopoverBootstrap>
    }
  >
    <Button variant="secondary" style={PopoverButton}>{title}</Button>
  </OverlayTrigger>
);

export default Popover;
