/*
 * TopMainBanner Messages
 *
 * This contains all the text for the TopMainBanner component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.TopMainBanner';

export default defineMessages({
  infoHeading: {
    id: `${scope}.infoHeading`,
    defaultMessage: 'Delivery Option',
  },
  subHeading1: {
    id: `${scope}.subHeading1`,
    defaultMessage: 'Home Delivery',
  },
  subHeading2: {
    id: `${scope}.subHeading2`,
    defaultMessage: 'PickUp From Shop',
  },
});
