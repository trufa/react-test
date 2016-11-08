/*
 *
 * Questions reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  questionsList: ["d", "e"]
});

function questionsReducer(state = initialState, action) {
  console.log("quest reducer");
  console.log(action.type);
  switch (action.type) {
    case DEFAULT_ACTION:
      console.log("action");
      return state
        .set('questionsList', ["b","c"]);
    default:
      return state;
  }
}

export default questionsReducer;
