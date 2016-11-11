/**
 * Gets the repositories of the user from Github
 */

import { takeLatest } from 'redux-saga';
import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import request from 'utils/request';


var reqInfo = {};
export function simpleGet(url, actionType, onSuccessActionFn, onErrorActionFn) {
  reqInfo = {
    url,
    actionType,
    onSuccessActionFn,
    onErrorActionFn
  }
}

export function* getQuestionsList() {

  try {
    // Call our request helper (see 'utils/request')
    const questions = yield call(request, reqInfo.url);
    yield put(reqInfo.onSuccessActionFn(questions));
  } catch (err) {
    //TODO: handle error
    yield put(reqInfo.onErrorActionFn(err));
  }
}

/**
 * Watches for LOAD_REPOS actions and calls getRepos when one comes in.
 * By using `takeLatest` only the result of the latest API call is applied.
 */
export function* getQuestionsWatcher() {
  yield fork(takeLatest, reqInfo.actionType, getQuestionsList);
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