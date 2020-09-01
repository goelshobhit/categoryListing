/*
 * TopBanner Messages
 *
 * This contains all the text for the TopBanner component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.TopBanner';

export default defineMessages({
  call: {
    id: `${scope}.call`,
    defaultMessage: 'Call',
  },
  whatsApp: {
    id: `${scope}.whatApp`,
    defaultMessage: 'WhatsApp',
  },
  map: {
    id: `${scope}.map`,
    defaultMessage: 'Map',
  },
  share: {
    id: `${scope}.share`,
    defaultMessage: 'Share',
  },
});
