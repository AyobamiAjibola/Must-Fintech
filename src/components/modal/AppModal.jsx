import React, { useRef } from 'react';
import { AppBar, Dialog, DialogContent, DialogTitle, IconButton, Toolbar,
Box
} from '@mui/material';;
import CloseIcon from '@mui/icons-material/Close';
import { PriorityHigh } from '@mui/icons-material';
import TransitionGrow from '../transitions/TransitionGrow';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  dialogContainer: {
    borderRadius: '1rem !important',
    // height: 'auto',
    // width: (props) => (props.width && props.width)
  },
}));

function AppModal(props) {
    const ref = useRef(null);
    const classes = useStyles();

    return (
      <div>
        <Dialog
          classes={{ paper: classes.dialogContainer }}
          open={props.show}
          TransitionComponent={TransitionGrow}
          keepMounted
          onClose={props.onClose}
          aria-describedby="app-modal"
          maxWidth={props.size}
          fullWidth={props.fullWidth}
          fullScreen={props.fullScreen}
          scroll="paper"
        >
          <AppBar
            sx={{
              position: 'relative',
              backgroundColor: 'transparent',
              boxShadow: 'none'
            }}
          >
            <Toolbar
              sx={{
                display: 'flex', justifyContent: 'space-between',
                alignItems: 'center', pt: 2
              }}
            >
              <Box
                sx={{
                  width: '50%',
                  display: 'flex', justifyContent: 'left',
                  alignItems: 'center'
                }}
              >
                {props.warningIcon && <Box
                  sx={{
                    display: 'flex', justifyContent: 'center',
                    alignItems: 'center', width: '2rem', height: '2rem',
                    borderRadius: '50%', backgroundColor: '#fff1c3'
                  }}
                >
                  <PriorityHigh sx={{color: '#c25d01'}}/>
                </Box>}
              </Box>
              <Box
                sx={{
                  width: '50%', display: 'flex', justifyContent: 'right',
                  alignItems: 'center'
                }}
              >
                <IconButton
                  edge="end" color="inherit"
                  onClick={props.onClose} aria-label="close"
                >
                  <CloseIcon sx={{color: '#4C4C4C'}}/>
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
          <DialogTitle>{props.title}</DialogTitle>
          <DialogContent ref={ref}
            sx={{
              height: props.contentHeight,
              mt: -5
            }}
          >
            {props.Content}
          </DialogContent>
          {props.ActionComponent && props.ActionComponent}
        </Dialog>
      </div>
    );
  }

  export default AppModal;