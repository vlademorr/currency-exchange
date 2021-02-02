import React from 'react';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import {Popover as PopoverMaterialUi} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import {PopoverButton} from '../styled';
import {IPopover} from '../types';

const Popover: React.FC<IPopover> = ({title, description}) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      typography: {
        padding: theme.spacing(1),
      }
    })
  );

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <Button
        onClick={handleClick}
        style={PopoverButton}
        aria-describedby={id}
        variant="contained"
        color="default"
      >
        {title}
      </Button>
      <PopoverMaterialUi
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <Typography className={classes.typography}>{description}</Typography>
      </PopoverMaterialUi>
    </>
  )
};

export default Popover;
