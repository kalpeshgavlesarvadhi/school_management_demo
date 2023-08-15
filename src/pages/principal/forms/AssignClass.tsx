import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles'; // Import from @mui/material/styles
import React, { useState } from 'react';

// const FormContainer = styled(Container)({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'center',
//   minHeight: '100vh',
// });

const Form = styled('form')(({ theme }) => ({
  width: '100%',
  maxWidth: 400,
  padding: theme.spacing(2),
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[5],
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

interface ClassAssignment {
  classname: string;
  grade: string;
  classTeacher: string;
}

const AssignClass: React.FC = () => {
  const [assignment, setAssignment] = useState<ClassAssignment>({
    classname: '',
    grade: '',
    classTeacher: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setAssignment((prevAssignment) => ({
      ...prevAssignment,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(assignment);
    // You can perform any further actions here, such as sending the data to an API.
  };

  return (
    <Container maxWidth="sm">
      <Form onSubmit={handleSubmit}>
        <Typography variant="h5" gutterBottom>
          Assign Class
        </Typography>
        <Box>
          <TextField
            label="Class Name"
            name="classname"
            value={assignment.classname}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            required
          />

          <TextField
            label="Grade"
            name="grade"
            value={assignment.grade}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            required
          />

          <TextField
            label="Class Teacher"
            name="classTeacher"
            value={assignment.classTeacher}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            required
          />
        </Box>
        <SubmitButton
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Assign
        </SubmitButton>
      </Form>
    </Container>
  );
};

export default AssignClass;
