import { Typography, styled, useMediaQuery, useTheme } from '@mui/material';
import { Container } from '@mui/system';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface Teacher {
  id: number;
  name: string;
  schedule: string;
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Teacher ID', width: 150 },
  { field: 'name', headerName: 'Teacher Name', width: 200 },
  { field: 'schedule', headerName: 'Schedule', width: 300 },
];

const rows: Teacher[] = [
  { id: 1, name: 'John Doe', schedule: 'Mon, Wed, Fri - 9:00 AM to 12:00 PM' },
  { id: 2, name: 'Jane Smith', schedule: 'Tue, Thu - 1:00 PM to 4:00 PM' },
  // Add more rows here as needed
];
const ScrollableDiv = styled('div')({
  width: '100%',
  margin: '0 auto',
  overflowX: 'auto',
});

const TeacherDataGrid: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Container sx={{ width: isMobile ? '100vw' : '70vw' }} maxWidth="xl">
      <Typography variant="h5" gutterBottom>
        Schedule of All Teachers
      </Typography>
      <ScrollableDiv>
        <DataGrid rows={rows} columns={columns} />
      </ScrollableDiv>
    </Container>
  );
};

export default TeacherDataGrid;
