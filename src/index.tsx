import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';


const theme = createMuiTheme({
  palette: {
    // dark cool ruby/ garnet colors
    primary: {
      light: "#b33f64", 
      main: "#7f023a",
      dark: "#4d0014",
      contrastText: "#ffffff"
    },
    // lighter cool pink colors
    secondary: {
      light: "#ffc1e3",
      main: "#f48fb1",
      dark: "#bf5f82",
      contrastText: "#000000"
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Button variant="contained" color="primary">
      Hello World
    </Button>
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.querySelector('#gm--app'));