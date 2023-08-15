import { Button, CardContent, Typography } from '@mui/material';
import React from 'react';

const TeacherCounter: React.FC = () => {
  return (
    // <Card sx={{ backgroundColor: '#e8f3ff!important' }}>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        Students
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 1 }}>
        Total: 5
      </Typography>
      <Button variant="contained" color="primary" sx={{ marginBottom: 1 }}>
        Show List
      </Button>
    </CardContent>
    // </Card>
  );
};

export default TeacherCounter;
