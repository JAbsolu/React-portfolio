import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import CodeIcon from '@mui/icons-material/Code';
import { useMediaQuery } from '@mui/material';
import { user } from '../../user';
import { themeSettings } from '../../theme';
import { ListItem } from '@mui/material';

const pages = ['About', 'Projects', "Contact"];

const Nav = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const firstName = user.firstName;
  const lastName = user.lastName;
  const fullName = `${firstName} ${lastName}`;
  const darkNavy = themeSettings.palette.primary.darkNavy;
  const lightNavy = themeSettings.palette.primary.lightNavy;
  const lightSlate = themeSettings.palette.primary.lightSlate;
  const green = themeSettings.palette.primary.green;
  const white = themeSettings.palette.primary.white;
  const themeFont = themeSettings.typography.fontFamily;
  // mediaquery
  const isNonMobile = useMediaQuery("(min-width: 1000px)"); 
  const isMobile = useMediaQuery("(max-width: 600px)")

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
  return (
    <AppBar 
      position="static" 
      sx={{
      background: darkNavy,
      color: green,
      }}
    >
      <Container maxWidth="100%" sx={{p: "0"}}>
        <Toolbar disableGutters>
          <CodeIcon 
            sx={{ display: { xs: 'none', md: 'flex' },
            mr: "0.5rem",
            ml: "0",
            color: green
          }} />
          <Typography
            variant= 'h6'
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: themeFont,
              fontWeight: 300,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {fullName}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ pl: "0", }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} sx={{
                  background: darkNavy,
                  color: white,
                }}>
                  <Button 
                    textAlign="center"
                    href={`#${page}`}
                    sx={{
                      color: lightSlate,
                      textTransform: "none",
                      "&:hover": {
                        color: darkNavy,
                        background: white,
                      }
                    }}
                  >
                    {page}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <CodeIcon 
            sx={{ 
              display: { xs: 'flex', md: 'none' },
              mr: 1,
              color: green,
              background: lightNavy,
              p: '5px',
              borderRadius: '50%'
          }} />
          <Typography
            variant='p'
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: themeFont,
              fontWeight: 600,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {fullName}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: lightSlate, display: 'block' }}
                href={`#${page}`}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Nav;