/**
 * Gets the repositories of the user from Github
 */

import { takeLatest } from 'redux-saga';
import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_QUESTIONS } from './constants';
import { questionsLoaded, questionsLoadingError } from './actions';

import request from 'utils/request';
import { selectUsername } from 'containers/HomePage/selectors';

/**
 * Github repos request/response handler
 */
export function* getRepos() {

  try {
    // Call our request helper (see 'utils/request')
    const questions = yield call(request, "http://localhost:3004/questions");
    yield put(questionsLoaded(questions));
  } catch (err) {
    //TODO: handle error
    yield put(questionsLoadingError(err));
  }
}

/**
 * Watches for LOAD_REPOS actions and calls getRepos when one comes in.
 * By using `takeLatest` only the result of the latest API call is applied.
 */
export function* getQuestionsWatcher() {
  yield fork(takeLatest, LOAD_QUESTIONS, getRepos);
}

/**
 * Root saga manages watcher lifecycle
 */
export function* questionsData() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(getQuestionsWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  questionsData,
];
