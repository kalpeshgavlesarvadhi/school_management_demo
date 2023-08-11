import {
  ChevronLeft,
  ChevronRight,
  Dashboard,
  ExitToApp,
  Settings,
} from '@mui/icons-material';

import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Theme,
  styled,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink here

const drawerWidth = 180;
const drawerWidthCollapsed = 85;

const DrawerHeader = styled('div')(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0, 1),
  ...((theme.mixins as any).toolbar as any),
}));

const BottomIcons = styled('div')({
  position: 'absolute',
  bottom: '16px',
  width: '100%',
  alignItems: 'center',
});

const CustomListItemIcon = styled(ListItemIcon)(
  ({ theme }: { theme: Theme }) => ({
    justifyContent: 'center',
  })
);

const LogoContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  padding: '10px', // Add 'px' unit
  zIndex: 10,
  right: -10,
});

const LogoTextContainer = styled('div')({
  flexDirection: 'row',
});
const LogoImage = styled('img')({
  width: '40px',
  height: '40px',
});

const LogoText = styled('p')({
  fontSize: '14px',
  fontWeight: 'bold',
  margin: '0',
});

// const ActiveNavLink = styled(NavLink)(({ theme }) => ({
//   color: theme.palette.primary.main, // Change this to your desired active link color
//   fontWeight: 'bold',
// }));

const Sidebar: React.FC<any> = ({ menuItems }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const StyledDrawer = styled(Drawer)(({ theme, open }) => ({
    width: isSidebarOpen ? drawerWidth : drawerWidthCollapsed,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    zIndex: theme.zIndex.drawer + 2,
    transition: 'width 2s ease-in-out !important',
    '& .MuiDrawer-paper': {
      width: isSidebarOpen ? drawerWidth : drawerWidthCollapsed,
      transition: 'width 2s ease-in-out ',
      boxSizing: 'border-box',
      zIndex: theme.zIndex.drawer + 2,
      overflowX: 'hidden',
    },

    [theme.breakpoints.down('sm')]: {
      width: '100%',

      '& .MuiDrawer-paper': {
        width: '100%',
      },
    },
  }));

  const handleDrawerToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <StyledDrawer variant="permanent" anchor="left">
      <div
        style={{
          width: isSidebarOpen ? drawerWidth : drawerWidthCollapsed,
          position: 'relative',
          height: '100vh',
          transition: 'width 2s ease-in-out ',
        }}
      >
        <DrawerHeader sx={{ padding: '0' }}>
          <LogoContainer>
            <LogoImage src="logo.png" alt="School Logo" />

            {isSidebarOpen && (
              <LogoTextContainer>
                <LogoText>School Name</LogoText>
              </LogoTextContainer>
            )}

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                position: 'absolute',
                right: 12,
                zIndex: 10,
              }}
            >
              <IconButton
                onClick={handleDrawerToggle}
                sx={{
                  background: 'black',
                  height: 25,
                  width: 25,
                  top: 16,
                  position: 'fixed',
                  color: 'white',
                  '&:hover': {
                    background: 'gray',
                  },
                }}
              >
                {isSidebarOpen ? <ChevronLeft /> : <ChevronRight />}
              </IconButton>
            </div>
          </LogoContainer>
        </DrawerHeader>
        <List>
          <ListItem button component={NavLink} to="/dashboard">
            <CustomListItemIcon>
              <Dashboard />
            </CustomListItemIcon>
            <ListItemText primary={isSidebarOpen ? 'Dashboard' : ''} />
          </ListItem>
          {menuItems.map((item: any) => (
            <ListItem
              button
              key={item.text}
              component={NavLink}
              to={item.route}
            >
              <CustomListItemIcon>{item.icon}</CustomListItemIcon>
              <ListItemText primary={isSidebarOpen ? item.text : ''} />
            </ListItem>
          ))}
        </List>
        <BottomIcons>
          <List>
            <ListItem button component={NavLink} to="/settings">
              <CustomListItemIcon>
                <Settings />
              </CustomListItemIcon>
              <ListItemText primary={isSidebarOpen ? 'Settings' : ''} />
            </ListItem>
            <ListItem button component={NavLink} to="/logout">
              <CustomListItemIcon>
                <ExitToApp />
              </CustomListItemIcon>
              <ListItemText primary={isSidebarOpen ? 'Logout' : ''} />
            </ListItem>
          </List>
        </BottomIcons>
      </div>
    </StyledDrawer>
  );
};

export default Sidebar;
