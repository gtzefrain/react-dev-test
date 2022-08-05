import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import * as React from 'react';

export function LinearIndeterminate() {
    return (
      <Box sx={{ width: '100%' }}>
        <LinearProgress />
      </Box>
    );
  }