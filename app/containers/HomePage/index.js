/**
 *
 * HomePage
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { find, filter, isEmpty } from 'lodash';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import Typography from '@material-ui/core/Typography';

import CategoryFruits from 'components/CategoryFruits';
import CategoryPizza from 'components/CategoryPizza';
import CategoryDrink from 'components/CategoryDrink';
import CategoryTable from 'components/CategoryTable';
import FacebookCirCularProgress from 'components/FacebookCircularProgress';

import TopBanner from 'components/TopBanner';
import TopMainBanner from 'components/TopMainBanner';
import MiddleBanner from 'components/MiddleBanner';
import MiddleMainBanner from 'components/MiddleMainBanner';
import BottomBanner from 'components/BottomBanner';

import {
  TOP_BANNER_CHECK,
  MIDDLE_BANNER_CHECK,
} from 'containers/App/constants';

import makeSelectHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';
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

  if (isEmpty(data) && loading) {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center w-100 h-100">
        <FacebookCirCularProgress />
      </div>
    );
  }
  // find category and banner data
  const bannerData = find(data, 'content-type');
  const categoriesData = filter(data, 'headerTitle');

  if (isEmpty(bannerData) || isEmpty(categoriesData)) {
    return null;
  }

  return (
    <div>
      <div className="d-flex flex-row align-items-center justify-content-center w-100 ">
        <Typography variant="h4" gutterBottom>
          {categoriesData[0].headerTitle}
        </Typography>
      </div>
      <CategoryFruits loading={loading} data={categoriesData[0]} />
      <TopBanner content={bannerData.banners.topBanner} />
      <CategoryPizza loading={loading} data={categoriesData[1]} />
      <TopMainBanner
        isPresent={
          data.length > TOP_BANNER_CHECK || data.length === TOP_BANNER_CHECK
        }
      />
      <CategoryDrink loading={loading} data={categoriesData[2]} />
      <MiddleBanner content={bannerData.banners.smallBanner} />
      <CategoryTable loading={loading} data={categoriesData[3]} />
      <MiddleMainBanner
        isPresent={
          data.length > MIDDLE_BANNER_CHECK ||
          data.length === MIDDLE_BANNER_CHECK
        }
      />
      <BottomBanner content={bannerData.banners.footerBanner} />
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
