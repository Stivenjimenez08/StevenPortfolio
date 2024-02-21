import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import SettingsIcon from '@mui/icons-material/Settings';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

import logo from '../../../assets/LOGO.png'
import { useTranslation } from 'react-i18next';
import i18n from '../../../config/i18next.config'
import '../../StyleComponent.css'

export const NavBar = ({ toggleTheme, toggleLanguage, setActiveSection }) => {

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { t, i18n } = useTranslation();

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

  const handleToggleLanguage = () => {
    toggleLanguage();
    const newLanguage = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLanguage);
    handleCloseUserMenu();
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };
  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <a><img src={logo} width={150} className='logo'/></a>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
              <MenuItem onClick={() => { handleCloseNavMenu(); scrollToSection('home'); }}>
                {t('whoAmI')}
              </MenuItem>

              <MenuItem onClick={() => { handleCloseNavMenu(); scrollToSection('about'); }}>
                {t('about')}
              </MenuItem>

              <MenuItem onClick={() => { handleCloseNavMenu(); scrollToSection('skills'); }}>
                {t('mySkills')}
              </MenuItem>

              <MenuItem onClick={() => { handleCloseNavMenu(); scrollToSection('projects'); }}>
                {t('projects')}
              </MenuItem>
       
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            <Button onClick={() => { scrollToSection('home'); }} sx={{ my: 2, color: 'white', display: 'block' }}>
              <Typography textAlign="center" color={'secondary'}>{t('whoAmI')}</Typography>
            </Button>

            <Button onClick={() => { scrollToSection('about'); }} sx={{ my: 2, color: 'white', display: 'block' }}>
              <Typography textAlign="center" color={'secondary'}>{t('about')}</Typography>
            </Button>

            <Button onClick={() => { scrollToSection('skills'); }} sx={{ my: 2, color: 'white', display: 'block' }}>
              <Typography textAlign="center" color={'secondary'}>{t('mySkills')}</Typography>
            </Button>

            <Button onClick={() => { scrollToSection('projects'); }} sx={{ my: 2, color: 'white', display: 'block' }}>
              <Typography textAlign="center" color={'secondary'}>{t('projects')}</Typography>
            </Button>

          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <SettingsIcon className='setIcon' sx={{width:35, height:35}}/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
             <MenuItem onClick={handleToggleLanguage}>
                <Typography textAlign="center" color={'secondary'}>{t('changeLanguage')}</Typography>
             </MenuItem>
             <MenuItem onClick={() => { toggleTheme(); handleCloseUserMenu(); }}>
                <Typography textAlign="center" color={'secondary'}>{t('changeTheme')}</Typography>
             </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}