import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { Container } from '@mui/system';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import * as React from 'react';
import styled from 'styled-components';

interface LeaveRequest {
  id: string;
  teacherName: string;
  startDate: string;
  endDate: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  reason: string;
}

interface LeaveRequestData {
  data: LeaveRequest[];
}

const LeaveManagement: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const leaveRequests: LeaveRequestData = {
    data: [
      {
        id: '1',
        teacherName: 'John Doe',
        startDate: '2023-08-02',
        endDate: '2023-08-05',
        status: 'Pending',
        reason: 'Family vacation',
      },
      {
        id: '2',
        teacherName: 'Pranay Shah',
        startDate: '2023-08-03',
        endDate: '2023-08-02',
        status: 'Pending',
        reason: 'Family vacation',
      },
      {
        id: '3',
        teacherName: 'Kalpesh Gavle',
        startDate: '2023-08-01',
        endDate: '2023-08-05',
        status: 'Pending',
        reason: 'Family vacation',
      },
      // ... add more leave requests
    ],
  };

  const ScrollableDiv = styled('div')({
    width: '100%',
    margin: '0 auto',
    overflowX: 'auto',
  });

  const columns: GridColDef[] = [
    { field: 'teacherName', headerName: 'Teacher Name', width: 200 },
    { field: 'startDate', headerName: 'Start Date', width: 200 },
    { field: 'endDate', headerName: 'End Date', width: 200 },
    { field: 'reason', headerName: 'Reason', width: 200 },
    { field: 'status', headerName: 'Status', width: 200 },
  ];

  return (
    <Container sx={{ width: isMobile ? '100vw' : '70vw' }} maxWidth="xl">
      <Typography variant="h5" gutterBottom>
        Leave Management
      </Typography>
      <ScrollableDiv>
        <DataGrid rows={leaveRequests.data} columns={columns} autoHeight />
      </ScrollableDiv>
    </Container>
  );
};

export default LeaveManagement;
