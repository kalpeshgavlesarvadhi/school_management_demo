import styled from '@emotion/styled';
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import React from 'react';

const StyledPaper = styled(Paper)`
  margin-top: 24px;
  padding: 16px;
`;

// const TableContainerWrapper = styled(TableContainer)(() => ({
//   component: Paper,
// }))`
//   margin-top: 16px;
// `;

const SchedulesOfTeachers: React.FC = () => {
  const teacherSchedules = [
    {
      id: '1',
      name: 'John Doe',
      schedule: [
        'Monday: 9 AM - 12 PM',
        'Wednesday: 10 AM - 1 PM',
        'Friday: 9 AM - 11 AM',
      ],
    },
    // ... add more teacher schedules
  ];

  return (
    <Container maxWidth="md">
      <StyledPaper>
        <Typography variant="h4" gutterBottom>
          Schedules of All Teachers
        </Typography>
        {/* <TableContainerWrapper> */}
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Teacher ID</TableCell>
              <TableCell>Teacher Name</TableCell>
              <TableCell>Schedule</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teacherSchedules.map((teacher) => (
              <TableRow key={teacher.id}>
                <TableCell>{teacher.id}</TableCell>
                <TableCell>{teacher.name}</TableCell>
                <TableCell>
                  <ul>
                    {teacher.schedule.map((slot, index) => (
                      <li key={index}>{slot}</li>
                    ))}
                  </ul>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* </TableContainerWrapper> */}
      </StyledPaper>
    </Container>
  );
};

export default SchedulesOfTeachers;
