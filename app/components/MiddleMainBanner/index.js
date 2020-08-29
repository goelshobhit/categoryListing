/**
 *
 * MiddleMainBanner
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import DoneIcon from '@material-ui/icons/DoneAll';
import { THEME_COLOR, WHITE_COLOR } from 'containers/App/constants';

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
    paddingLeft: theme.spacing(10),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(2),
    },
    backgroundColor: THEME_COLOR,
    borderRadius: 10,
    color: WHITE_COLOR,
  },
  info: {
    fontWeight: 600,
  },
  infoText: {
    fontWeight: 400,
    marginLeft: theme.spacing(1),
  },
}));

function MiddleMainBanner({ isPresent }) {
  const classes = useStyles();
  if (!isPresent) {
    return false;
  }
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
      <div className="d-flex flex-row align-items-center justify-content-start">
        <DoneIcon style={{ fill: WHITE_COLOR }} className={classes.info} />
        <Typography
          variant="inherit"
          display="block"
          gutterBottom
          noWrap
          className={classes.infoText}
        >
          <FormattedMessage {...messages.subHeading1} />
        </Typography>
        <DoneIcon style={{ fill: WHITE_COLOR }} className={classes.infoText} />
        <Typography
          variant="inherit"
          display="block"
          gutterBottom
          noWrap
          className={classes.infoText}
        >
          <FormattedMessage {...messages.subHeading2} />
        </Typography>
      </div>
    </div>
  );
}

MiddleMainBanner.propTypes = {
  isPresent: PropTypes.bool,
};

export default MiddleMainBanner;
