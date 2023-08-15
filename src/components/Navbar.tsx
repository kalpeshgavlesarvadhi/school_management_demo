// import  from '@mui/icons-material/Menu';
import {
  ExitToApp,
  Menu,
  Notifications,
  Search,
  Settings,
} from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Drawer,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import {
  BottomIcons,
  CustomListItemIcon,
  DrawerHeader,
  LogoContainer,
  LogoImage,
  LogoText,
  LogoTextContainer,
  StyledNavLink,
} from './Sidebar';

const SearchBar = styled('div')(({ theme }) => ({
  zIndex: '2',
  position: 'relative',
  marginRight: 16,
  '& .MuiSvgIcon-root': {
    color: theme.palette.common.white,
  },
  '& .MuiInputBase-root': {
    color: theme.palette.common.white,
    '& input': {
      padding: '10px 16px', // Slightly increased padding
      borderRadius: '20px',
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      transition: 'background-color 0.3s ease',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
      },
    },
  },
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.primary.main, // Change this to your desired background color
  position: 'sticky',
  top: 0,
  zIndex: 2,
}));

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const UserInfoContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginLeft: 16,
});

const UserName = styled(Typography)({
  fontSize: '1rem',
  fontWeight: 'bold',
  marginRight: 4,
});

const UserRole = styled(Typography)({
  fontSize: '0.8rem',
  opacity: 0.7,
});

// interface HeaderProps {
//   user: {
//     name: string;
//     role: string;
//     avatarUrl: string;
//   };
// }

const Navbar: React.FC<any> = ({ user, menuItems }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const [drawerOpen, setDrawerOpen] = useState(false);
  const menuAnchorRef = React.useRef(null);

  const handleMenuClose = () => {
    setDrawerOpen(false);
  };
  const handleMenuToggle = () => {
    setDrawerOpen((prevOpen) => !prevOpen);
  };
  const [userDrawerOpen, setUserDrawerOpen] = useState(false);

  const handleUserDrawerOpen = () => {
    setUserDrawerOpen(true);
  };

  const handleUserDrawerClose = () => {
    setUserDrawerOpen(false);
  };

  return (
    <StyledAppBar position="static" elevation={0}>
      <StyledToolbar>
        {/* Left Side: Menu Button */}
        {isMobile && (
          <IconButton
            ref={menuAnchorRef}
            size="large"
            color="inherit"
            onClick={handleMenuToggle}
          >
            <Menu />
          </IconButton>
        )}

        {/* Middle: Component Names */}
        {!isMobile && (
          <Typography variant="h6" color="inherit">
            Component
          </Typography>
        )}

        {/* Right Side: Search Bar, Notification Icon, and User Info */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {/* ... Search Bar and other components ... */}
          {!isMobile && !isTablet && (
            <SearchBar>
              <IconButton size="large" color="inherit">
                <Search />
              </IconButton>
              <InputBase placeholder="Search..." />
            </SearchBar>
          )}

          {/* Notification Icon */}
          <IconButton size="large" color="inherit">
            {!isMobile && (
              <IconButton size="large" color="inherit">
                <Notifications />
              </IconButton>
            )}
          </IconButton>

          {/* User Info */}
          <UserInfoContainer onClick={handleUserDrawerOpen}>
            <Avatar
              src={user.avatarUrl}
              alt={user.name}
              style={{ cursor: 'pointer' }}
            />
            {!isMobile && !isTablet && (
              <div style={{ marginLeft: 8 }}>
                <UserName variant="subtitle1" color="inherit">
                  {user.name}
                </UserName>
                <UserRole variant="caption" color="inherit">
                  {user.role}
                </UserRole>
              </div>
            )}
          </UserInfoContainer>
        </div>

        {/* Menu Button for Small Screens */}

        {isMobile && (
          <Drawer anchor="left" open={drawerOpen} onClose={handleMenuClose}>
            <DrawerHeader sx={{ padding: '0' }}>
              <LogoContainer>
                <LogoImage src="schoollogo.png" alt="School Logo" />
                <LogoTextContainer>
                  <LogoText>School Name</LogoText>
                </LogoTextContainer>
              </LogoContainer>
            </DrawerHeader>
            <List>
              {/* <ListItem
                button
                component={StyledNavLink}
                to="/"
                onClick={handleMenuToggle}
              >
                <CustomListItemIcon>
                  <Dashboard />
                </CustomListItemIcon>
                <ListItemText primary={'Dashboard'} />
              </ListItem> */}
              {menuItems.map((item: any) => (
                <ListItem
                  button
                  key={item.text}
                  component={StyledNavLink}
                  to={item.route}
                  onClick={handleMenuToggle}
                >
                  <CustomListItemIcon>{item.icon}</CustomListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
            <BottomIcons>
              <List>
                <ListItem
                  button
                  component={StyledNavLink}
                  to="/settings"
                  onClick={handleMenuToggle}
                >
                  <CustomListItemIcon>
                    <Settings />
                  </CustomListItemIcon>
                  <ListItemText primary={'Settings'} />
                </ListItem>
                <ListItem
                  button
                  component={StyledNavLink}
                  to="/logout"
                  onClick={handleMenuToggle}
                >
                  <CustomListItemIcon>
                    <ExitToApp />
                  </CustomListItemIcon>
                  <ListItemText primary={'Logout'} />
                </ListItem>
              </List>
            </BottomIcons>
          </Drawer>
        )}
      </StyledToolbar>

      <Drawer
        anchor="right"
        open={userDrawerOpen}
        onClose={handleUserDrawerClose}
      >
        <Box p={2} width={isMobile || isTablet ? 160 : 250}>
          <Avatar
            src={user.avatarUrl}
            alt={user.name}
            sx={{ width: 64, height: 64, margin: '0 auto' }}
          />
          <Typography variant="h6" sx={{ mt: 2, textAlign: 'center' }}>
            {user.name}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ opacity: 0.7, textAlign: 'center' }}
          >
            {user.role}
          </Typography>
        </Box>
      </Drawer>
    </StyledAppBar>
  );
};

export default Navbar;
