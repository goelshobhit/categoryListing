/**
 *
 * HomePage
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import Typography from '@material-ui/core/Typography';

import makeSelectHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { getCategories } from './actions';

export function HomePage({
  onRequestCategories,
  homePage: {
    categories: { loading, data },
  },
}) {
  useInjectReducer({ key: 'homePage', reducer });
  useInjectSaga({ key: 'homePage', saga });

  useEffect(() => {
    onRequestCategories();
  }, []);

  console.log(loading);
  console.log(data);

  return (
    <div>
      <div className="d-flex flex-row align-items-center justify-content-center w-100 ">
        <Typography variant="h3" gutterBottom>
          <FormattedMessage {...messages.shopBy} />
        </Typography>
      </div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

HomePage.propTypes = {
  onRequestCategories: PropTypes.func,
  homePage: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    onRequestCategories: () => dispatch(getCategories()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(HomePage);
