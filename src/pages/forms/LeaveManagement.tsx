import { Check, Clear } from '@mui/icons-material';
import {
  Button,
  ButtonGroup,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

// const theme = createTheme(); // Create a theme object

// const useStyles = makeStyles((theme: Theme) => ({
//   rootPaper: {
//     marginTop: theme.spacing(3),
//     padding: theme.spacing(2),
//   },
//   scrollingTableContainer: {
//     marginTop: theme.spacing(2),
//     overflowX: 'auto',
//   },
// }));

interface LeaveRequest {
  id: string;
  teacherName: string;
  startDate: string;
  endDate: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  reason: string;
}

const LeaveManagement: React.FC = () => {
  //   const classes = useStyles();
  //   const isMobile = useMediaQuery((theme as any).breakpoints.down('sm')); // Use theme.breakpoints directly

  const [leaveRequests, setLeaveRequests] = useState<LeaveRequest[]>([
    {
      id: '1',
      teacherName: 'John Doe',
      startDate: '2023-08-01',
      endDate: '2023-08-05',
      status: 'Pending',
      reason: 'Family vacation',
    },
    // ... add more leave requests
  ]);

  const handleApprove = (id: string) => {
    setLeaveRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === id ? { ...request, status: 'Approved' } : request
      )
    );
  };

  const handleReject = (id: string) => {
    setLeaveRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === id ? { ...request, status: 'Rejected' } : request
      )
    );
  };

  return (
    <Container maxWidth="xl">
      {/* <ThemeProvider theme={theme}> */}
      <Paper>
        <Typography variant="h4" gutterBottom>
          Leave Management
        </Typography>
        <div>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Teacher Name</TableCell>
                  <TableCell>Start Date</TableCell>
                  <TableCell>End Date</TableCell>
                  <TableCell>Reason</TableCell>
                  <TableCell>Status</TableCell>
                  {/* {!isMobile && <TableCell>Actions</TableCell>} */}
                </TableRow>
              </TableHead>
              <TableBody>
                {leaveRequests.map((request) => (
                  <TableRow key={request.id}>
                    <TableCell>{request.teacherName}</TableCell>
                    <TableCell>{request.startDate}</TableCell>
                    <TableCell>{request.endDate}</TableCell>
                    <TableCell>{request.reason}</TableCell>
                    <TableCell>{request.status}</TableCell>
                    {/* {!isMobile && ( */}
                    <TableCell>
                      {request.status === 'Pending' && (
                        <ButtonGroup>
                          <Button
                            variant="contained"
                            color="success"
                            onClick={() => handleApprove(request.id)}
                          >
                            <Check />
                            Approve
                          </Button>
                          <Button
                            variant="contained"
                            color="error"
                            onClick={() => handleReject(request.id)}
                          >
                            <Clear />
                            Reject
                          </Button>
                        </ButtonGroup>
                      )}
                    </TableCell>
                    {/* )} */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Paper>
      {/* </ThemeProvider> */}
    </Container>
  );
};

export default LeaveManagement;
