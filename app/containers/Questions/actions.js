/*
 *
 * Questions actions
 *
 */

import {
  LOAD_QUESTIONS,
  LOAD_QUESTIONS_SUCCESS,
  LOAD_QUESTIONS_ERROR,
} from './constants';

export function loadQuestions() {
  return {
    type: LOAD_QUESTIONS,
  };
}

export function questionsLoaded(questions) {
  return {
    type: LOAD_QUESTIONS_SUCCESS,
    questions,
  };
}


export function questionsLoadingError(err) {
  return {
    type: LOAD_QUESTIONS_ERROR,
    err,
  };
}
