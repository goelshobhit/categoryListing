/**
 *
 * BottomBanner
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: `${theme.spacing(3)} 0 ${theme.spacing(3)} 0`,
      width: '100%',
      boxShadow: 'none',
    },
  },
  smallBanner: {
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(2.5),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(2),
    },
  },
  info: {
    fontWeight: 400,
  },
  infoText: {
    fontWeight: 400,
    marginLeft: theme.spacing(1),
  },
}));

function BottomBanner({ content: { heading, subHeading } }) {
  const classes = useStyles();
  return (
    <div
      className={`d-flex flex-column align-items-center justify-content-center ${
        classes.smallBanner
      }`}
    >
      <Typography
        variant="body1"
        display="block"
        gutterBottom
        noWrap
        className={classes.info}
      >
        {heading}
      </Typography>
      <Typography
        variant="inherit"
        display="block"
        gutterBottom
        noWrap
        className={classes.infoText}
      >
        {subHeading}
      </Typography>
    </div>
  );
}

BottomBanner.propTypes = {
  content: PropTypes.object,
};

export default BottomBanner;
