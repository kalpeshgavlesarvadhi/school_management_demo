import {
  ChevronLeft,
  ChevronRight,
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
  useMediaQuery,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const drawerWidth = 240;
const drawerWidthCollapsed = 85;

export const DrawerHeader = styled('div')(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0, 1),
  ...((theme.mixins as any).toolbar as any),
}));

export const BottomIcons = styled('div')({
  position: 'absolute',
  bottom: '16px',
  width: '100%',
  alignItems: 'center',
});

export const CustomListItemIcon = styled(ListItemIcon)(() => ({
  justifyContent: 'center',
}));

export const LogoContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  padding: '10px', // Add 'px' unit
  zIndex: 10,
  right: -10,
});

export const LogoTextContainer = styled('div')({
  flexDirection: 'row',
});
export const LogoImage = styled('img')({
  width: '40px',
  height: '40px',
});

export const LogoText = styled('p')({
  fontSize: '14px',
  fontWeight: 'bold',
  margin: '0',
});

export const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  // padding: '6px 0px !important',
  color: 'inherit',
  '&.active': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '& .MuiListItemIcon-root': {
      color: theme.palette.primary.contrastText,
    },
  },
  '&:hover': {
    backgroundColor: '#79b5ff5e !important',
    color: 'inherit',
    '& .MuiListItemIcon-root': {
      color: 'inherit',
    },
  },
}));

const Sidebar: React.FC<any> = ({ menuItems }) => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm')
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(!isSmallScreen);

  if (isSmallScreen) {
    return null; // Don't render anything on small screens
  }

  const StyledDrawer = styled(Drawer)(({ theme }) => ({
    width: isSidebarOpen ? drawerWidth : drawerWidthCollapsed,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    zIndex: theme.zIndex.drawer + 2,
    // transition: 'width 2s ease-in-out !important',
    '& .MuiDrawer-paper': {
      width: isSidebarOpen ? drawerWidth : drawerWidthCollapsed,
      transition: 'width 2s ease-in-out ',
      boxSizing: 'border-box',
      zIndex: theme.zIndex.drawer + 2,
      overflowX: 'hidden',
    },

    [theme.breakpoints.down('sm')]: {
      width: isSidebarOpen ? '100%' : 0,

      '& .MuiDrawer-paper': {
        width: isSidebarOpen ? '100%' : 0,
      },
    },
  }));

  const handleDrawerToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    // <Drawer >
    <StyledDrawer variant="permanent" anchor="left">
      <div
        style={{
          width: isSidebarOpen ? drawerWidth : drawerWidthCollapsed,
          position: 'relative',
          height: '100vh',
          transition: 'width 0.2s ease-in-out ',
        }}
      >
        <DrawerHeader sx={{ padding: '0' }}>
          <LogoContainer>
            <LogoImage src="schoollogo.png" alt="School Logo" />

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
          {/* <ListItem button component={StyledNavLink} to="/">
            <CustomListItemIcon>
              <Dashboard />
            </CustomListItemIcon>
            <ListItemText primary={isSidebarOpen ? 'Dashboard' : ''} />
          </ListItem> */}
          {menuItems.map((item: any) => (
            <ListItem key={item.text} component={StyledNavLink} to={item.route}>
              <CustomListItemIcon>{item.icon}</CustomListItemIcon>
              <ListItemText primary={isSidebarOpen ? item.text : ''} />
            </ListItem>
          ))}
        </List>
        <BottomIcons>
          <List>
            <ListItem component={StyledNavLink} to="/settings">
              <CustomListItemIcon>
                <Settings />
              </CustomListItemIcon>
              <ListItemText primary={isSidebarOpen ? 'Settings' : ''} />
            </ListItem>
            <ListItem component={StyledNavLink} to="/logout">
              <CustomListItemIcon>
                <ExitToApp />
              </CustomListItemIcon>
              <ListItemText primary={isSidebarOpen ? 'Logout' : ''} />
            </ListItem>
          </List>
        </BottomIcons>
      </div>
    </StyledDrawer>
    // </Drawer>
  );
};

export default Sidebar;
