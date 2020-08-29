/**
 *
 * TopBanner
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import CallIcon from '@material-ui/icons/Call';
import WhatShortIcon from '@material-ui/icons/WhatsApp';
import Typography from '@material-ui/core/Typography';
import RoomIcon from '@material-ui/icons/Room';
import ShareIcon from '@material-ui/icons/Share';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

import { THEME_COLOR } from 'containers/App/constants';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(3),
      width: '100%',
      boxShadow: 'none',
    },
  },
  smallBanner: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  icon: {
    height: theme.spacing(10),
    width: theme.spacing(10),
    padding: '10px',
    borderColor: THEME_COLOR,
    border: `1px solid ${THEME_COLOR}`,
    borderRadius: `50%`,
    marginBottom: `20px`,
    fill: THEME_COLOR,
    [theme.breakpoints.down('sm')]: {
      height: theme.spacing(7),
      width: theme.spacing(7),
    },
  },
  info: {
    fontWeight: 600,
  },
}));

function TopBanner() {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.smallBanner}>
      <Grid item xs={3}>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <CallIcon className={classes.icon} style={{ fill: THEME_COLOR }} />
          <Typography
            variant="button"
            display="block"
            gutterBottom
            noWrap
            className={classes.info}
          >
            <FormattedMessage {...messages.call} />
          </Typography>
        </div>
      </Grid>
      <Grid item xs={3}>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <WhatShortIcon
            className={classes.icon}
            style={{ fill: THEME_COLOR }}
          />
          <Typography
            variant="button"
            display="block"
            gutterBottom
            noWrap
            className={classes.info}
          >
            <FormattedMessage {...messages.whatsApp} />
          </Typography>
        </div>
      </Grid>
      <Grid item xs={3}>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <RoomIcon className={classes.icon} style={{ fill: THEME_COLOR }} />
          <Typography
            variant="button"
            display="block"
            gutterBottom
            noWrap
            className={classes.info}
          >
            <FormattedMessage {...messages.map} />
          </Typography>
        </div>
      </Grid>
      <Grid item xs={3}>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <ShareIcon className={classes.icon} style={{ fill: THEME_COLOR }} />
          <Typography
            variant="button"
            display="block"
            gutterBottom
            noWrap
            className={classes.info}
          >
            <FormattedMessage {...messages.share} />
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
}

TopBanner.propTypes = {};

export default TopBanner;
