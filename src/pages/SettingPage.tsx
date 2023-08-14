import {
  Box,
  Container,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';

const SettingsPage = () => {
  return (
    <Container maxWidth="xl">
      <Box>
        <Typography variant="h4" gutterBottom>
          Settings
        </Typography>
        <Paper>
          <List component="nav">
            <ListItem button>
              <ListItemText primary="Account" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Notifications" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Privacy" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Security" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Preferences" />
            </ListItem>
          </List>
        </Paper>
      </Box>
    </Container>
  );
};

export default SettingsPage;
