import {
  Box,
  Card,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';
import AttendanceChart from './charts/AttendenceChart';
import GenderChart from './charts/GenderChart';
import StudentCounter from './charts/StudentCounter';
import TeacherCounter from './charts/TeacherCounter';

const DashboardPage: React.FC = () => {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));

  const cardStyles = {
    width: '100%',
    marginBottom: isMdScreen ? '16px' : '0',
    borderRadius: '10px',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
    backgroundColor: '#e8f3ff!important',
    '&:hover': {
      transform: 'translateY(-5px) scale(1.02)',
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
    },
  };

  const graphCardStyle = {
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    width: isSmScreen ? '100%' : isMdScreen ? '82%' : '48%',
    margin: 'auto',
    height: '100%',
  };

  return (
    <Container maxWidth="xl">
      <Box>
        <Typography variant="h5" gutterBottom>
          Dashboard
        </Typography>
        <Box mt={0} sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexWrap: isMdScreen ? 'wrap' : 'nowrap',
              marginBottom: '25px',
              gap: '20px',
            }}
          >
            <Card sx={cardStyles}>
              <StudentCounter />
            </Card>
            <Card sx={cardStyles}>
              <TeacherCounter />
            </Card>
            <Card sx={cardStyles}>
              <TeacherCounter />
            </Card>
            <Card sx={cardStyles}>
              <TeacherCounter />
            </Card>
          </Box>
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              flexWrap: 'wrap',
              height: '100%',
              columnGap: '15px',
              rowGap: '25px',
              marginTop: '20px',
            }}
          >
            <Card sx={graphCardStyle}>
              <GenderChart />
            </Card>
            <Card sx={graphCardStyle}>
              <AttendanceChart />
            </Card>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default DashboardPage;
