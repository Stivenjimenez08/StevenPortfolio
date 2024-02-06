import React, { useState } from 'react'
import { createRoot }from 'react-dom/client';
import { App } from './App.jsx'
import {CssBaseline, ThemeProvider, createTheme } from '@mui/material'

const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#024959',
      dark: '#000000',
      contrastText: '#F2E3D5',
    },
    secondary: {
      main: '#dec5a5',
    },
    background: {
      default: '#083846',
      paper: '#07374e',
    },
    text: {
      primary: '#F2E3D5',
      hint: 'rgba(0,0,0,0.5)',
      disabled: 'rgba(0,0,0,0.5)',
    },
    divider: '#F2E3D5',
    error: {
      main: '#c54d15',
    },
  },
})

const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#283373',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

function Main() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme(prevState => !prevState);
  };

  const theme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App toggleTheme={toggleTheme}/>
      </ThemeProvider>
    </React.StrictMode>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<Main />)