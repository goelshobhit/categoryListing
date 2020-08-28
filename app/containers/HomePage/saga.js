import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { GET_CATEGORIES } from './constants';
import { categoriesFail, categoriesSuccess } from './actions';

function* getCategories() {
  try {
    const options = {
      method: 'get',
      url: 'https://intense-basin-90511.herokuapp.com/myData',
    };
    const response = yield call(request, options);
    yield put(categoriesSuccess(response));
  } catch (e) {
    yield put(categoriesFail(e));
  }
}
// Individual exports for testing
export default function* homePageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(GET_CATEGORIES, getCategories);
}
