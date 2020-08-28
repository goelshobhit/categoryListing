/*
 * CategoryPizza Messages
 *
 * This contains all the text for the CategoryPizza component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.CategoryPizza';

export default defineMessages({
  covid19Message: {
    id: `${scope}.covid19Message`,
    defaultMessage: 'Protection against covid-19',
  },
  viewAll: {
    id: `${scope}.viewAll`,
    defaultMessage: 'View All',
  },
});
