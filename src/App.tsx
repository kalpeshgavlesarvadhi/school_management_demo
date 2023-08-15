import {
  Assignment,
  Dashboard,
  PersonAdd,
  Schedule,
  WorkOutline,
} from '@mui/icons-material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/system';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import SettingsPage from 'pages/SettingPage';
import DashboardPage from 'pages/principal/DashboardPage';
import LeaveManagement from 'pages/principal/LeaveManagement';
import SchedulePage from 'pages/principal/SchedulePage';
import SchedulesOfTeachers from 'pages/principal/SchedulesOfTeachers';
import AddTeacher from 'pages/principal/forms/AddTeacher';
import AssignClass from 'pages/principal/forms/AssignClass';
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
  role: 'Principal',
  avatarUrl: 'userlogo.jpg', // Replace with actual avatar URL
};

interface MenuItem {
  icon: React.ReactNode;
  text: string;
  route: string;
}

const App: React.FC = () => {
  let menuItems: MenuItem[] = [];

  if (user.role === 'Principal') {
    menuItems = [
      { icon: <Dashboard />, text: 'Dashboard', route: '/dashboard' },
      { icon: <PersonAdd />, text: 'Add Teacher', route: '/addteacher' },
      {
        icon: <Schedule />,
        text: 'Schedule of Teacher',
        route: '/scheduleofteacher',
      },
      {
        icon: <WorkOutline />,
        text: 'Leave Management',
        route: '/leavemanagement',
      },
      {
        icon: <Assignment />,
        text: 'Class Assign',
        route: '/assignclass',
      },
    ];
  } else if (user.role === 'Teacher') {
    menuItems = [
      // Teacher menu items
    ];
  } else if (user.role === 'Student') {
    menuItems = [
      // Student menu items
    ];
  }

  return (
    <div style={{ display: 'flex' }}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Sidebar menuItems={menuItems} />
          <div style={{ flex: 1 }}>
            <Navbar user={user} menuItems={menuItems} />
            <div>
              <Routes>
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route
                  path="/scheduleofteacher"
                  element={<SchedulesOfTeachers />}
                />
                <Route path="/addteacher" element={<AddTeacher />} />
                <Route path="/schedule" element={<SchedulePage />} />
                <Route path="/leavemanagement" element={<LeaveManagement />} />
                <Route path="/assignclass" element={<AssignClass />} />
              </Routes>
            </div>
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
