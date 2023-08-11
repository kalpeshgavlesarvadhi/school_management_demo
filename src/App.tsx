import AssignmentIcon from '@mui/icons-material/Assignment';
import PersonIcon from '@mui/icons-material/Person';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/system';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import DashboardPage from 'pages/DashboardPage';
import SettingsPage from 'pages/SettingPage';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const theme = createTheme({
  mixins: {
    toolbar: {
      minHeight: 56, // Adjust the height according to your design
    },
  },
  // Other theme configuration
});

const user = {
  name: 'John Doe',
  role: 'Admin',
  avatarUrl: 'https://example.com/avatar.jpg', // Replace with actual avatar URL
};

const App: React.FC = () => {
  const menuItems = [
    { icon: <AssignmentIcon />, text: 'Assignments', route: '/dashboard' },
    { icon: <PersonIcon />, text: 'Profile', route: '/profile' },
  ];

  return (
    <div style={{ display: 'flex' }}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Sidebar menuItems={menuItems} />
          <div style={{ flex: 1 }}>
            <Header user={user} />
            <div style={{ padding: '16px' }}>
              <Routes>
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/settings" element={<SettingsPage />} />
              </Routes>
            </div>
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
