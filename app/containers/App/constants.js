/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const THEME_COLOR = 'rgb(139,175,74)';
export const WHITE_COLOR = '#ffffff';
export const EMPTY_COLOR = '#f5f5f5';
export const TOP_BANNER_CHECK = 2;
export const MIDDLE_BANNER_CHECK = 4;
export const LIST_ITEMS_COUNT = 6;
