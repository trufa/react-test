/*
 *
 * Questions reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_QUESTIONS,
} from './constants';

const initialState = fromJS({
  questionsList: []
});

function questionsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_QUESTIONS:
      console.log("action");
      return state
        .set('questionsList', ["b","c"]);
    default:
      return state;
  }
}

export default questionsReducer;
