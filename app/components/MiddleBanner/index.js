/**
 *
 * MiddleBanner
 *
 */

import React from 'react';

import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import { THEME_COLOR } from 'containers/App/constants';

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
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(2),
    },
    border: `1px solid ${THEME_COLOR}`,
    borderRadius: 10,
    color: THEME_COLOR,
  },
  info: {
    fontWeight: 600,
  },
  infoText: {
    fontWeight: 500,
  },
}));

function MiddleBanner() {
  const classes = useStyles();
  return (
    <div
      className={`d-flex flex-column align-items-start justify-content-center ${
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

MiddleBanner.propTypes = {};

export default MiddleBanner;
