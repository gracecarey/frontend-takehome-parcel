import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SearchIcon from '@material-ui/icons/Search';
import StarsIcon from '@material-ui/icons/Stars';

function SiteNav() {
  return (
    <List>
      <ListItem button key="search">
        <Link to="/search-gems">Search Gems</Link>
        <ListItemIcon><SearchIcon /></ListItemIcon>
        <ListItemText primary="Search Gems" />
      </ListItem>
      <ListItem button key="my-gems">
        <Link to="/saved-gems">Search Gems</Link>
        <ListItemIcon><StarsIcon /></ListItemIcon>
        <ListItemText primary="Saved Gems" />
      </ListItem>
    </List>
  );
}

export default SiteNav;