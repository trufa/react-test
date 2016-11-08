/*
 *
 * Questions reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_QUESTIONS,
  LOAD_QUESTIONS_SUCCESS,
  LOAD_QUESTIONS_ERROR,
} from './constants';

const initialState = fromJS({
  questionsList: []
});

function questionsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_QUESTIONS:
      console.log("loading questions");
      return state;
    case LOAD_QUESTIONS_SUCCESS:
      return state
        .set('questionsList', action.questions);
    case LOAD_QUESTIONS_ERROR:
      console.log("ERROR: ", action.err);
      return state;
    default:
      return state;
  }
}

export default questionsReducer;
