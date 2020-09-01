/**
 *
 * BottomBanner
 *
 */

import React from 'react';

import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

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

function BottomBanner() {
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
        <FormattedMessage {...messages.infoHeading} />
      </Typography>
      <Typography
        variant="inherit"
        display="block"
        gutterBottom
        noWrap
        className={classes.infoText}
      >
        <FormattedMessage {...messages.subHeading1} />
      </Typography>
    </div>
  );
}

BottomBanner.propTypes = {};

export default BottomBanner;
