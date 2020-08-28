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
import { makeStyles } from '@material-ui/core/styles';

import { WHITE_COLOR, THEME_COLOR } from 'containers/App/constants';

import messages from './messages';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(3),
      width: theme.spacing(16),
      boxShadow: 'none',
    },
  },
  card: {
    [theme.breakpoints.down('sm')]: {
      height: theme.spacing(10),
      width: theme.spacing(10),
    },
    boxShadow: 'none',
  },
  media: {
    height: theme.spacing(16),
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
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(5),
    },
  },
}));
function CategoryFruits({ loading, data }) {
  const classes = useStyles();

  function renderContent() {
    if (loading) {
      return map(Array.from(new Array(3)), () => (
        <Skeleton variant="rect" width={210} height={118} key={Math.random()} />
      ));
    }

    if (!isEmpty(data)) {
      const { listItem } = data;
      return (
        <div className="w-100">
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
            startIcon={<DownloadIcon />}
          >
            <Typography className={classes.buttonText}>
              <FormattedMessage {...messages.seeMore} />
            </Typography>
          </Button>
        </div>
      );
    }
    return false;
  }
  return (
    <Paper elevation={0} className={classes.root} component="div">
      {renderContent()}
    </Paper>
  );
}

CategoryFruits.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.object,
};

export default CategoryFruits;
