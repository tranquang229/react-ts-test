import React, { useState, ChangeEvent, useEffect } from 'react';
import {
  AppBar,
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Theme,
  Toolbar,
  Typography,
} from '@mui/material';
import WelcomeMessage from './WelcomeMessage';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  positionSelect: {
    color: 'white !important',
    border: '1px solid white',
  },
}));

const Navbar = () => {
  const classes = useStyles();
  // State
  const [position, setPosition] = useState<string>('Full-stack-developer');
  const [time, setTime] = useState<Date>(() => new Date(Date.now()));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(() => new Date(Date.now()));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const onPositionChange = (e: SelectChangeEvent<string>) =>
    setPosition(e.target.value as string);

  return (
    <AppBar position='static' color='primary'>
      <Toolbar>
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          width={1}
          py={2}
          flexWrap='wrap'
        >
          <Typography variant='h6'>My movie</Typography>
          <Box textAlign='center'>
            <WelcomeMessage position={position} />
            <Box mt={1}>
              <FormControl>
                <Select
                  value={position}
                  onChange={onPositionChange}
                  className={classes.positionSelect}
                >
                  <MenuItem value='Full-stack-developer'>
                    Full-stack-developer
                  </MenuItem>
                  <MenuItem value='Front-end-developer'>
                    Front-end-developer
                  </MenuItem>
                  <MenuItem value='Back-end-developer'>
                    Back-end-developer
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>

          <Box textAlign='center'>
            <Box my={1}>
              <Typography variant='h6'>{time.toUTCString()}</Typography>
            </Box>
            <Button variant='contained' color='success'>
              Login
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
