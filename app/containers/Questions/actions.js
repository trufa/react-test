/*
 *
 * Questions actions
 *
 */

import {
  LOAD_QUESTIONS,
} from './constants';

export function loadQuestions() {
  return {
    type: LOAD_QUESTIONS,
  };
}
