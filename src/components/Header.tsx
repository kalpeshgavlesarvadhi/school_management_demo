import {
  Notifications as NotificationsIcon,
  Search as SearchIcon,
} from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Button,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, { useState } from 'react';

const SearchBar = styled('div')(({ theme }) => ({
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

interface HeaderProps {
  user: {
    name: string;
    role: string;
    avatarUrl: string;
  };
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleSearchButtonClick = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <StyledAppBar
      position="static"
      elevation={0} // No shadow
    >
      <StyledToolbar>
        {/* Left Side: Component Names */}
        <Typography variant="h6" color="inherit">
          Component Names
        </Typography>

        {/* Right Side: Search Bar, Notification Icon, and User Info */}
        <div
          style={{
            marginLeft: 'auto',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {isMobile ? (
            // Button to toggle search bar
            <Button onClick={handleSearchButtonClick}>
              {isSearchVisible ? 'Hide Search' : 'Show Search'}
            </Button>
          ) : (
            // Search Bar

            <SearchBar>
              <IconButton size="large" color="inherit">
                <SearchIcon />
              </IconButton>
              <InputBase placeholder="Search..." />
            </SearchBar>
          )}

          {/* Notification Icon */}
          <IconButton size="large" color="inherit">
            <NotificationsIcon />
          </IconButton>

          {/* User Info */}
          <UserInfoContainer>
            <Avatar src={user.avatarUrl} alt={user.name} />
            <div style={{ marginLeft: 8 }}>
              <UserName variant="subtitle1" color="inherit">
                {user.name}
              </UserName>
              <UserRole variant="caption" color="inherit">
                {user.role}
              </UserRole>
            </div>
          </UserInfoContainer>
        </div>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;
