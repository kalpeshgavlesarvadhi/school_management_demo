import { Box, Container, Grid, Paper, Typography } from '@mui/material';

const DashboardPage = () => {
  return (
    <Container maxWidth="xl">
      <Box mt={3}>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <Paper>
              <Typography variant="h6" gutterBottom>
                Widget 1
              </Typography>
              <Typography>This is the content of Widget 1.</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper>
              <Typography variant="h6" gutterBottom>
                Widget 2
              </Typography>
              <Typography>This is the content of Widget 2.</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Paper>
              <Typography variant="h6" gutterBottom>
                Widget 3
              </Typography>
              <Typography>This is the content of Widget 3.</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default DashboardPage;
