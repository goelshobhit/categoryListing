/**
 *
 * CategoryFruits
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function CategoryFruits() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

CategoryFruits.propTypes = {};

export default CategoryFruits;
