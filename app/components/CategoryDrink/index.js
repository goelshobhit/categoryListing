/* eslint-disable consistent-return */
/**
 *
 * CategoryDrink
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { map, isEmpty } from 'lodash';

import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Skeleton from '@material-ui/lab/Skeleton';
import DownloadIcon from '@material-ui/icons/ArrowRight';
import { makeStyles } from '@material-ui/core/styles';

import { WHITE_COLOR, THEME_COLOR } from 'containers/App/constants';

import messages from './messages';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    '& > *': {
      margin: theme.spacing(3),
      width: '100%',
      boxShadow: 'none',
    },
    overflowX: 'auto',
  },
  card: {
    boxShadow: 'none',
    border: `1px solid ${THEME_COLOR}`,
    margin: '0 0 0 5px',
    minWidth: '49%',
  },
  media: {
    height: theme.spacing(30),
    width: '98%',
    backgroundColor: WHITE_COLOR,
  },
  sectionInfo: {
    paddingTop: theme.spacing(5),
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1.5),
    paddingBottom: theme.spacing(5),
    width: '100%',
  },
  button: {
    backgroundColor: THEME_COLOR,
    '&:hover': {
      backgroundColor: THEME_COLOR,
    },
    width: '20%',
    [theme.breakpoints.down('sm')]: {
      width: '35%',
    },
  },
  info: {
    fontWeight: 600,
  },
}));
function CategoryDrink({ loading, data }) {
  const classes = useStyles();
  function renderContent() {
    if (loading) {
      return map(Array.from(new Array(3)), () => (
        <Skeleton variant="rect" width={60} height={319} key={Math.random()} />
      ));
    }

    if (!isEmpty(data)) {
      const { listItem } = data;
      return (
        <Paper>
          <div
            className={`d-flex flex-row align-items-center justify-content-between w-100+ ${
              classes.sectionInfo
            }`}
          >
            <Typography variant="inherit" className={classes.info}>
              <FormattedMessage {...messages.covid19Message} />
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              endIcon={<DownloadIcon />}
            >
              <Typography variant="inherit" noWrap>
                <FormattedMessage {...messages.viewAll} />
              </Typography>
            </Button>
          </div>
          <Paper elevation={0} className={classes.root} component="div">
            {map(listItem, ({ image, name }) => (
              <Card className={classes.card} key={name}>
                <CardMedia
                  className={classes.media}
                  image={image}
                  title={name}
                />
              </Card>
            ))}
          </Paper>
        </Paper>
      );
    }
    return null;
  }
  return (
    <div className={classes.root} id="pizza">
      {renderContent()}
    </div>
  );
}

CategoryDrink.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.object,
};

export default CategoryDrink;
