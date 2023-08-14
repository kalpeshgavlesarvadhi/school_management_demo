import { PersonAdd, Schedule } from '@mui/icons-material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/system';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import DashboardPage from 'pages/DashboardPage';
import SchedulePage from 'pages/SchedulePage';
import SchedulesOfTeachers from 'pages/SchedulesOfTeachers';
import SettingsPage from 'pages/SettingPage';
import AddTeacher from 'pages/forms/AddTeacher';
import LeaveManagement from 'pages/forms/LeaveManagement';
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
  avatarUrl: 'userlogo.jpg', // Replace with actual avatar URL
};

const App: React.FC = () => {
  const menuItems = [
    { icon: <PersonAdd />, text: 'Add Teacher', route: '/addteacher' },
    {
      icon: <Schedule />,
      text: 'Schedule of Teacher',
      route: '/scheduleofteacher',
    },
    { icon: <Schedule />, text: 'Schedule', route: '/schedule' },
    { icon: <Schedule />, text: 'Leave Management', route: '/leavemanagement' },
  ];

  return (
    <div style={{ display: 'flex' }}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Sidebar menuItems={menuItems} />
          <div style={{ flex: 1 }}>
            <Navbar user={user} menuItems={menuItems} />
            <div style={{ padding: '16px' }}>
              <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route
                  path="/scheduleofteacher"
                  element={<SchedulesOfTeachers />}
                />
                <Route path="/addteacher" element={<AddTeacher />} />
                <Route path="/schedule" element={<SchedulePage />} />
                <Route path="/leavemanagement" element={<LeaveManagement />} />
              </Routes>
            </div>
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
