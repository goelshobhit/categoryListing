/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Switch, Route } from 'react-router-dom';

import NavBar from 'components/NavBar';
import HomePage from 'containers/HomePage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import makeSelectHomePage from 'containers/HomePage/selectors';

import GlobalStyle from '../../global-styles';

function getNavItems(data) {
  return data.map(item => {
    const mappedData = { item: item.headerTitle, href: item.href };
    return mappedData;
  });
}
export function App({
  homePage: {
    categories: { data },
  },
}) {
  return (
    <div>
      <NavBar navItems={getNavItems(data)} />
      <div className="container" id="container-sm">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>{' '}
      </div>
      <GlobalStyle />
    </div>
  );
}

App.propTypes = {
  ...App,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
