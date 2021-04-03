import React from 'react';
import { Box, List, Popover } from '@material-ui/core';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

function Dropdown(props) {
  return (
    <PopupState variant='popover' popupId='demo-popup-menu'>
      {(popupState) => (
        <React.Fragment>
          <div {...bindTrigger(popupState)}>{props.primary}</div>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Box>
              <List onClick={popupState.close} dense>
                {props.secondary}
              </List>
            </Box>
          </Popover>
        </React.Fragment>
      )}
    </PopupState>
  );
}

export default Dropdown;
