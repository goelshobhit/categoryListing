/* eslint-disable consistent-return */
/**
 *
 * CategoryDrink
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { map, isEmpty } from 'lodash';

import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Skeleton from '@material-ui/lab/Skeleton';
import DownloadIcon from '@material-ui/icons/ArrowRight';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

import {
  EMPTY_COLOR,
  THEME_COLOR,
  LIST_ITEMS_COUNT,
} from 'containers/App/constants';

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
    backgroundColor: EMPTY_COLOR,
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
    outline: 'none',
    width: '20%',
    [theme.breakpoints.down('sm')]: {
      width: '45%',
    },
  },
  info: {
    fontWeight: 600,
    maxWidth: '20vw',
  },
}));
function CategoryDrink({ loading, data }) {
  const classes = useStyles();
  if (isEmpty(data)) {
    return null;
  }
  function renderContent() {
    if (loading) {
      return map(Array.from(new Array(3)), () => (
        <Skeleton variant="rect" width={100} height={319} key={Math.random()} />
      ));
    }

    function renderViewMoreButton() {
      if (data.count < LIST_ITEMS_COUNT) {
        return null;
      }
      return (
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          endIcon={<DownloadIcon />}
        >
          <Typography variant="inherit" noWrap>
            {data['button-text']}
          </Typography>
        </Button>
      );
    }
    if (!isEmpty(data)) {
      const { listItem } = data;
      return (
        <Paper id="drinks">
          <div
            className={`d-flex flex-row align-items-center justify-content-between w-100+ ${
              classes.sectionInfo
            }`}
          >
            <Tooltip title={data.headerTitle} aria-label={data.headerTitle}>
              <Typography variant="inherit" className={classes.info} noWrap>
                {data.headerTitle}
              </Typography>
            </Tooltip>
            {renderViewMoreButton()}
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
    <div className={classes.root} id={data.href}>
      {renderContent()}
    </div>
  );
}

CategoryDrink.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.object,
};

export default CategoryDrink;
