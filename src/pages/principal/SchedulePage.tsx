import {
  Container,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';

interface ScheduleItem {
  time: string;
  days: string[];
  className: string;
}

interface ScheduleData {
  schedule: ScheduleItem[];
}

const schedules: ScheduleData = {
  schedule: [
    {
      time: '8:00 AM - 9:00 AM',
      days: ['Monday', 'Wednesday'],
      className: 'Math',
    },
    {
      time: '9:00 AM - 10:00 AM',
      days: ['Tuesday', 'Thursday'],
      className: 'Science',
    },
    // ... other schedule items
  ],
};

const SchedulePage: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <Container maxWidth="lg">
      <Typography variant="h5" gutterBottom>
        Student Schedules
      </Typography>
      <Grid container spacing={2}>
        {schedules.schedule.map((item, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={isSmallScreen ? 6 : isMediumScreen ? 4 : 2}
            sx={{
              textAlign: 'center',
              fontSize: isSmallScreen
                ? '10px'
                : isMediumScreen
                ? '12px'
                : 'inherit',
            }}
          >
            <Paper
              sx={{
                backgroundColor: 'lightgray',
                padding: '8px',
                borderRadius: '4px',
                transition: 'background-color 0.3s, cursor 0.3s',
                '&:hover': {
                  backgroundColor: 'white',
                  cursor: 'pointer',
                },
              }}
            >
              <Typography variant="body1">{item.time}</Typography>
              <Typography variant="body2">{item.days.join(', ')}</Typography>
              <Typography variant="body2">{item.className}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SchedulePage;
