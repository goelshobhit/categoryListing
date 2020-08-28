/*
 *
 * HomePage actions
 *
 */

import {
  GET_CATEGORIES,
  CATEGORIES_SUCCESS,
  CATEGORIES_FAIL,
} from './constants';

export const getCategories = () => ({
  type: GET_CATEGORIES,
});

export const categoriesSuccess = payload => ({
  type: CATEGORIES_SUCCESS,
  payload,
});

export const categoriesFail = error => ({
  type: CATEGORIES_FAIL,
  error,
});
