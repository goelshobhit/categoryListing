/**
 *
 * TopBanner
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { map } from 'lodash';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

import { THEME_COLOR } from 'containers/App/constants';

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
    textTransform: 'capitalize',
  },
}));

function TopBanner({ content }) {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.smallBanner}>
      {map(content, ({ image, name }) => (
        <Grid item xs={3}>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <img src={image} alt="name" className={classes.icon} />
            <Typography
              variant="button"
              display="block"
              gutterBottom
              noWrap
              className={classes.info}
            >
              {name}
            </Typography>
          </div>
        </Grid>
      ))}
    </Grid>
  );
}

TopBanner.propTypes = {
  content: PropTypes.array,
};

export default TopBanner;
