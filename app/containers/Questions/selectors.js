import { createSelector } from 'reselect';

/**
 * Direct selector to the questions state domain
 */
const selectQuestionsDomain = () => (state) => state.get('questions');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Questions
 */

const selectQuestions = () => createSelector(
  selectQuestionsDomain(),
  (questionState) => questionState.get("questionsList")
);

export default selectQuestions;
export {
  selectQuestions,
  selectQuestionsDomain,
};
