import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import ResponsiveDrawer from './components/Drawer'
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import SavedGems from './components/SavedGems';
import SearchGems from './components/SearchGems';

const theme = createMuiTheme({
  // todo: move hex colors into better-named constant variables
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
  },
  typography: {
    h1: {
      fontSize: '1rem',
      '@media (min-width:600px)': {
        fontSize: '1.2rem',
      },
      fontFamily: "'Staatliches', cursive"
    }
  }
})

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <ResponsiveDrawer>
          <Route path="/" exact component={ SearchGems } />
          <Route path="/search-gems" component={ SearchGems } />
          <Route path="/saved-gems" component={ SavedGems } />
          <Button variant="contained" color="primary">
            Hello World
          </Button>
        </ResponsiveDrawer>
      </ThemeProvider>
    </Router>
  );
}

ReactDOM.render(<App />, document.querySelector('#gm--app'));