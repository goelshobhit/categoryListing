/* eslint-disable react/prop-types */
import React from 'react';
import { FormattedMessage } from 'react-intl';

import { map, lowerCase } from 'lodash';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCardIcon from '@material-ui/icons/ShoppingCart';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { THEME_COLOR, WHITE_COLOR } from 'containers/App/constants';

import messages from './messages';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    backgroundColor: THEME_COLOR,
    color: WHITE_COLOR,
    height: 64,
    display: 'flex',
    justifyContent: 'center',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    outline: 'none',
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    marginTop: 65,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer({ navItems }) {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  function handleToScroll(value) {
    const elmnt = document.getElementById(value);
    if (elmnt) {
      elmnt.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }

  function ListItemLink(props) {
    return (
      <ListItem
        button
        {...props}
        onClick={() => {
          handleToScroll(props.href);
        }}
      />
    );
  }
  const drawer = (
    <div className={classes.nav}>
      <Divider />
      <List>
        {map(navItems, items => (
          <ListItemLink button href={lowerCase(items.item)} key={Math.random()}>
            <ListItemText primary={items.item} />
          </ListItemLink>
        ))}
      </List>
    </div>
  );

  const container = undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <div className="d-flex flex-row justify-content-between w-100">
            <Typography variant="h6" noWrap style={{ color: WHITE_COLOR }}>
              <FormattedMessage {...messages.header} />
            </Typography>
            <ShoppingCardIcon />
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>

      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  ...ResponsiveDrawer,
};

export default ResponsiveDrawer;
