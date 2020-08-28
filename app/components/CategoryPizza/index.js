/**
 *
 * CategoryPizza
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function CategoryPizza() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

CategoryPizza.propTypes = {};

export default CategoryPizza;
