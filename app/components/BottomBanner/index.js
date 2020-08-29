/**
 *
 * BottomBanner
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function BottomBanner() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

BottomBanner.propTypes = {};

export default BottomBanner;
