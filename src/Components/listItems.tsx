import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import { Link } from "react-router-dom"


export const mainListItems = (
  <React.Fragment>
    <Link to="/dashboard" style={{ color: 'inherit', textDecoration: 'inherit' }}>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </Link>
    <Link to="/user-mangement" style={{ color: 'inherit', textDecoration: 'inherit' }}>
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="User Management" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);

