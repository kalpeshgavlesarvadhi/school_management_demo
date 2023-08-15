import { Button, CardContent, Typography } from '@mui/material';
import React from 'react';

const TeacherCounter: React.FC = () => {
  return (
    <CardContent>
      <Typography variant="h6" gutterBottom>
        Staff Members
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 1 }}>
        Total: 6
      </Typography>
      <Button variant="contained" color="primary" sx={{ marginBottom: 1 }}>
        Show List
      </Button>
    </CardContent>
  );
};

export default TeacherCounter;
