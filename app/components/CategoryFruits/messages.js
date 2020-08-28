/*
 * CategoryFruits Messages
 *
 * This contains all the text for the CategoryFruits component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.CategoryFruits';

export default defineMessages({
  seeMore: {
    id: `${scope}.seeMore`,
    defaultMessage: 'See More',
  },
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
