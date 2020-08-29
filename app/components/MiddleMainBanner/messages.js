/*
 * MiddleMainBanner Messages
 *
 * This contains all the text for the MiddleMainBanner component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.MiddleMainBanner';

export default defineMessages({
  infoHeading: {
    id: `${scope}.infoHeading`,
    defaultMessage: 'Payment Option',
  },
  subHeading1: {
    id: `${scope}.subHeading1`,
    defaultMessage: 'Pay via UPI',
  },
  subHeading2: {
    id: `${scope}.subHeading2`,
    defaultMessage: 'Pay at shop',
  },
});
