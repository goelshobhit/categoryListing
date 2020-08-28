/*
 *
 * HomePage reducer
 *
 */
import produce from 'immer';
import {
  GET_CATEGORIES,
  CATEGORIES_SUCCESS,
  CATEGORIES_FAIL,
} from './constants';

export const initialState = {
  categories: {
    loading: false,
    data: [],
    error: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_CATEGORIES:
        draft.categories.loading = true;
        break;
      case CATEGORIES_SUCCESS:
        draft.categories.data = action.payload;
        draft.categories.loading = false;
        break;
      case CATEGORIES_FAIL:
        draft.categories.loading = false;
        draft.categories.error = action.error;
        break;
    }
  });

export default homePageReducer;
