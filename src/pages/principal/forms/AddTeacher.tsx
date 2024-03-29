import { Add } from '@mui/icons-material';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

interface TeacherFormData {
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  role: string;
  password: string;
}

const AddTeacher: React.FC = () => {
  const [formData, setFormData] = useState<TeacherFormData>({
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    role: 'Teacher', // Default role is set to 'teacher'
    password: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name as string]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform an action to add the teacher using the formData
    // For example, you can make an API request to your backend here
    console.log('Form data:', formData);
    // Reset the form after submission
    setFormData({
      username: '',
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      role: 'Teacher', // Reset role to 'teacher'
      password: '',
    });
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" gutterBottom>
        Add Teacher
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="First Name"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Last Name"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Role"
              name="role"
              value={formData.role}
              required
              fullWidth
              disabled
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          startIcon={<Add />}
          style={{ marginTop: '16px' }}
        >
          Add Teacher
        </Button>
      </form>
    </Container>
  );
};

export default AddTeacher;
