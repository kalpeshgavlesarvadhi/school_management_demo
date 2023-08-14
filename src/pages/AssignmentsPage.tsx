import { Assignment } from '@mui/icons-material';
import {
  Container,
  CssBaseline,
  Grid,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import React from 'react';

export interface Assignments {
  id: number;
  title: string;
  description: string;
}

const assignments: Assignments[] = [
  {
    id: 1,
    title: 'Math Homework',
    description: 'Complete exercises 1-5 from Chapter 3.',
  },
  {
    id: 2,
    title: 'Science Project',
    description: 'Prepare a presentation about photosynthesis.',
  },
  // Add more assignments here...
];

const AssignmentPage: React.FC = () => {
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Assignments
        </Typography>
        <Grid container spacing={2}>
          {assignments.map((assignment) => (
            <Grid item xs={12} sm={6} md={4} key={assignment.id}>
              <Paper elevation={3} style={{ padding: '1rem' }}>
                <Assignment />
                <ListItemText
                  primary={assignment.title}
                  secondary={assignment.description}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default AssignmentPage;
