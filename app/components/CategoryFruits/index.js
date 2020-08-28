/* eslint-disable consistent-return */
/**
 *
 * CategoryFruits
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { map, isEmpty } from 'lodash';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import DownloadIcon from '@material-ui/icons/CloudDownloadOutlined';
import CallIcon from '@material-ui/icons/Call';
import WhatShortIcon from '@material-ui/icons/WhatsApp';
import RoomIcon from '@material-ui/icons/Room';
import ShareIcon from '@material-ui/icons/Share';
import { makeStyles } from '@material-ui/core/styles';

import { WHITE_COLOR, THEME_COLOR } from 'containers/App/constants';

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
  card: {
    [theme.breakpoints.down('sm')]: {
      height: theme.spacing(7),
      width: theme.spacing(7),
    },
    boxShadow: 'none',
  },
  media: {
    height: theme.spacing(16),
    [theme.breakpoints.down('sm')]: {
      height: theme.spacing(14),
    },
    backgroundColor: WHITE_COLOR,
  },
  itemText: {
    textAlign: 'center',
    padding: '6px 6px 6px 6px',
    marginBottom: '10px',
    [theme.breakpoints.down('sm')]: {
      transform: 'translateY(-80px)',
      backgroundColor: WHITE_COLOR,
    },
  },
  buttonText: {
    textTransform: 'lowercase',
  },
  button: {
    backgroundColor: THEME_COLOR,
    '&:hover': {
      backgroundColor: THEME_COLOR,
    },
    width: '100%',
    margin: theme.spacing(5),
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
function CategoryFruits({ loading, data }) {
  const classes = useStyles();

  function handleToScroll() {
    const elmnt = document.getElementById('pizza');
    elmnt.scrollIntoView({
      behavior: 'smooth',
    });
  }

  function renderContent() {
    if (loading) {
      return map(Array.from(new Array(3)), () => (
        <Skeleton variant="rect" width={210} height={118} key={Math.random()} />
      ));
    }

    if (!isEmpty(data)) {
      const { listItem } = data;
      return (
        <div>
          <Paper elevation={0} className={classes.root} component="div">
            <Grid container spacing={3} className="w-100">
              {map(listItem, ({ image, name }) => (
                <Grid item xs={3} key={name}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.media}
                      image={image}
                      title={name}
                    />
                    <CardContent className={classes.itemText}>
                      <Typography noWrap>{name}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              endIcon={<DownloadIcon />}
              onClick={handleToScroll}
            >
              <Typography className={classes.buttonText}>
                <FormattedMessage {...messages.seeMore} />
              </Typography>
            </Button>
          </Paper>
          <Grid container spacing={3} className={classes.smallBanner}>
            <Grid item xs={3}>
              <div className="d-flex flex-column align-items-center justify-content-center">
                <CallIcon
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
                <RoomIcon
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
                  <FormattedMessage {...messages.map} />
                </Typography>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="d-flex flex-column align-items-center justify-content-center">
                <ShareIcon
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
                  <FormattedMessage {...messages.share} />
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      );
    }
    return null;
  }
  return <div className={classes.root}>{renderContent()}</div>;
}

CategoryFruits.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.object,
};

export default CategoryFruits;
